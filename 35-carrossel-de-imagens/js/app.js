const imagens = document.getElementById('imgs')
const esquerdoBtn = document.getElementById('esquerdo')
const direitoBtn = document.getElementById('direito')

const img = document.querySelectorAll('#imgs img')

let index = 0
let intervalo = setInterval(rodar, 2000)

function rodar() {
    index++

    alterarImagem()
}

function alterarImagem() {

    if (index > img.length - 1) {

        index = 0

    } else if (index < 0) {
        index = img.length - 1
    }

    imagens.style.transform = `translateX(${-index * 500}px)`
}

function redefinirIntervalo() {
    clearInterval(intervalo)
    intervalo = setInterval(rodar, 2000)
}

direitoBtn.addEventListener('click', () => {

    index++
    alterarImagem()
    redefinirIntervalo()
})


esquerdoBtn.addEventListener('click', () => {

    index--
    alterarImagem()
    redefinirIntervalo()
})