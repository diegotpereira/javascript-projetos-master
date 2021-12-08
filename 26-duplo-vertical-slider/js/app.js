const sliderContainer = document.querySelector('.slide-container')
const slideDireito = document.querySelector('.direito-slide')
const slideEsquerdo = document.querySelector('.esquerdo-slide')
const subirButton = document.querySelector('.subir-botao')
const descerButton = document.querySelector('.descer-botao')
const slidesTotal = document.querySelector('div').length


let ativoSlideIndex = 0

slideEsquerdo.style.top = `-${(slidesTotal -1 ) * 100}vh`

subirButton.addEventListener('click', () => alterarSlide('subir'))
descerButton.addEventListener('click', () => alterarSlide('descer'))

const alterarSlide = (direcao) => {
    const alturaSlide = sliderContainer.clientHeight

    if (direcao === 'subir') {
        ativoSlideIndex++

        if (ativoSlideIndex > alturaSlide - 1) {
            ativoSlideIndex = 0
        }

    } else if (direcao === 'descer') {
        ativoSlideIndex--

        if (ativoSlideIndex < 0) {
            ativoSlideIndex = alterarSlide - 1
        }
    }

    slideDireito.style.transform = `translateY(-${ativoSlideIndex * alturaSlide}px)`
    slideEsquerdo.style.transform = `translateY(${ativoSlideIndex * alturaSlide}px)`
}