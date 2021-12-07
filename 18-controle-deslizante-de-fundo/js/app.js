const corpo = document.body

const slides = document.querySelectorAll('.slide')

const esquerdoBtn = document.getElementById('left')
const direitoBtn = document.getElementById('right')

let ativoSlide = 0

direitoBtn.addEventListener('click', () => {

    ativoSlide++

    if (ativoSlide > slides.length - 1) {
        ativoSlide = 0
    }

    definirBgParaBody()
    definirSlideAtivo()
})

esquerdoBtn.addEventListener('click', () => {

    ativoSlide--

    if (ativoSlide < 0) {
        ativoSlide = slides.length - 1
    }

    definirBgParaBody()
    definirSlideAtivo()
})

function definirBgParaBody() {
    corpo.style.backgroundImage = slides[ativoSlide].style.backgroundImage
}

function definirSlideAtivo() {

    slides.forEach((slide) => slide.classList.remove('active'))

    slides[ativoSlide].classList.add('active')
}