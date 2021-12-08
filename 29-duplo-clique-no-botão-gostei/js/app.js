const meAme = document.querySelector('.meAme')
const vezes = document.querySelector('#vezes')

let cliqueEmTempo = 0
let vezesClicado = 0

meAme.addEventListener('click', (e) => {

    if (cliqueEmTempo === 0) {
        cliqueEmTempo = new Date().getTime()

    } else {

        if ((new Date().getTime() - cliqueEmTempo) < 800) {

            criarGostei(e)
            cliqueEmTempo = 0

        } else {
            cliqueEmTempo = new Date().getTime()
        }
    }
})

const criarGostei = (e) => {
    const gostei = document.createElement('i')
    gostei.classList.add('fas')
    gostei.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    gostei.style.top = `${yInside}px`
    gostei.style.left = `${xInside}px`

    meAme.appendChild(gostei)

    vezes.innerHTML = ++vezesClicado

    setTimeout(() => gostei.remove(), 1000)
}