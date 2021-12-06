const caixas = document.querySelectorAll('.box')

window.addEventListener('scroll', checarCaixa)

function checarCaixa() {
    const btnGatilho = window.innerHeight / 5 * 4

    caixas.forEach(caixa => {
        const caixaTopo = caixa.getBoundingClientRect().top

        if (caixaTopo < btnGatilho) {
            caixa.classList.add('show')

        } else {
            caixa.classList.remove('show')
        }
    })

}