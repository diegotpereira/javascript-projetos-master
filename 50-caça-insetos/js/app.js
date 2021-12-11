const telas = document.querySelectorAll('.tela')
const escolhaInsetoBtns = document.querySelectorAll('.escolha-inseto-btn')
const iniciarBtn = document.getElementById('iniciar-btn')
const jogoContainer = document.getElementById('jogo-container')
const tempoEl = document.getElementById('tempo')
const pontuacaoEl = document.getElementById('pontuacao')
const mensagem = document.getElementById('mensagem')

let segundos = 0
let pontuacao = 0
let insetoSelecionado = {}

iniciarBtn.addEventListener('click', () => telas[0].classList.add('up'))

escolhaInsetoBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        insetoSelecionado = { src, alt }
        telas[1].classList.add('up')

        setTimeout(criarInseto, 1000)

        iniciarJogo()
    })
})

function iniciarJogo() {
    setInterval(aumentarJogo, 1000)
}

function aumentarJogo() {

    let m = Math.floor(segundos / 60)
    let s = segundos % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    tempoEl.innerHTML = `Tempo: ${m}:${s}`
    segundos++
}

function criarInseto() {

    const inseto = document.createElement('div')
    inseto.classList.add('inseto')

    const { x, y } = buscarLocalizacaoAleatoria()
    inseto.style.top = `${y}px`
    inseto.style.left = `${x}px`
    inseto.innerHTML = `<img src="${insetoSelecionado.src}" alt="${insetoSelecionado.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    inseto.addEventListener('click', pegarInseto)

    jogoContainer.appendChild(inseto)
}


function buscarLocalizacaoAleatoria() {

    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100


    return { x, y }
}


function pegarInseto() {
    aumentarPontuacao()
    this.classList.add('capturado')
    setTimeout(() => this.remove(), 2000)
    addInsetos()
}

function addInsetos() {
    setTimeout(criarInseto, 1000)
    setTimeout(criarInseto, 1500)
}

function aumentarPontuacao() {

    pontuacao++

    if (pontuacao > 19) {

        mensagem.classList.add('visivel')
    }

    pontuacaoEl.innerHTML = `Pontuação: ${pontuacao}`
}