const botoes = document.querySelectorAll('.ondulacao')

botoes.forEach(botao => {
    botao.addEventListener('click', function(event) {
        const x = event.clientX
        const y = event.clientY

        const botaoTop = event.target.offsetTop
        const botaoEsquerdo = event.target.offsetLeft

        const xInside = x - botaoEsquerdo
        const yInside = y - botaoTop

        const circulo = document.createElement('span')
        circulo.classList.add('circulo')
        circulo.style.top = yInside + 'px'
        circulo.style.left = xInside + 'px'

        this.appendChild(circulo)

        setTimeout(() => circulo.remove(), 500)
    })
})