const textoEl = document.getElementById('texto')
const velocidadeEl = document.getElementById('velocidade')
const texto = 'Nós Amamos Programar'

let index = 1
let velocidade = 300 / velocidadeEl.value

escreverTexto()

function escreverTexto() {
    textoEl.innerHTML = texto.slice(0, index)

    index++

    if (index > texto.length) {
        index = 1
    }

    setTimeout(escreverTexto, velocidade)
}