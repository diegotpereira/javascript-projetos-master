const esquerdo = document.querySelector('.left')
const direito = document.querySelector('.right')
const container = document.querySelector('.container')

esquerdo.addEventListener('mouseenter', () => container.classList.add('hover-left'))
esquerdo.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

direito.addEventListener('mouseenter', () => container.classList.add('hover-right'))
direito.addEventListener('mouseleave', () => container.classList.remove('hover-right'))