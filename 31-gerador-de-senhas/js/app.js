const resultadoEL = document.getElementById('resultado')
const comprimentoEl = document.getElementById('comprimento')
const maiusculaEl = document.getElementById('maiusculas')
const minusculaEl = document.getElementById('minusculas')
const numerosEl = document.getElementById('numeros')
const simbolosEL = document.getElementById('simbolos')
const gerarEl = document.getElementById('gerador')
const clipboardEl = document.getElementById('clipboard')

// Chama função conforme checkbox
const funcaoAleatoria = {
    minuscula: buscarAleatoriaMinuscula,
    maiuscula: buscarAleatoriaMaiuscula,
    numero: buscarAleatoriaNumero,
    simbolo: buscarAleatoriaSimbolo
}

// Função copiar para area de transferencia
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const senha = resultadoEL.innerText

    if (!senha) { return }

    textarea.value = senha
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    alert('Senha copiada para a área de transferência!')
})

// Quando clicado no botão gerador de senha
gerarEl.addEventListener('click', () => {
    const comprimento = +comprimentoEl.value
    const temMinuscula = minusculaEl.checked
    const temMaiuscula = maiusculaEl.checked
    const temNumero = numerosEl.checked
    const temSimbolo = simbolosEL.checked

    resultadoEL.innerText = gerarSenha(temMinuscula, temMaiuscula, temNumero, temSimbolo, comprimento)
})


// Responsavel por gerar senha
function gerarSenha(minuscula, maiuscula, numero, simbolo, comprimento) {
    let gerarSenha = ''
    const tiposContagem = minuscula + maiuscula + numero + simbolo

    const tiposArr = [{ minuscula }, { maiuscula }, { numero }, { simbolo }].filter(item => Object.values(item)[0])

    if (tiposContagem === 0) {
        return ''
    }

    for (let i = 0; i < comprimento; i += tiposContagem) {
        tiposArr.forEach(tipo => {
            const funNome = Object.keys(tipo)[0]
            gerarSenha += funcaoAleatoria[funNome]()
        })
    }

    const finalSenha = gerarSenha.slice(0, comprimento)

    return finalSenha
}

// FUNÇÔES DE CRIAÇÃO ALEATORIA DE SENHA
function buscarAleatoriaMinuscula() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function buscarAleatoriaMaiuscula() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function buscarAleatoriaNumero() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function buscarAleatoriaSimbolo() {

    const simbolos = '!@#$%^&*(){}[]=<>/,.'

    return simbolos[Math.floor(Math.random() * simbolos.length)]
}