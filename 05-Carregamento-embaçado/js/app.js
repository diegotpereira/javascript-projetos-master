const carregarTexto = document.querySelector('.carregar-texto')
const bg = document.querySelector('.bg')

let carregar = 0

let int = setInterval(obscurecimento, 30)

function obscurecimento() {
    carregar++

    if (carregar > 99) {
        clearInterval(int)
    }

    carregarTexto.innerHTML = `${carregar}`
    carregarTexto.style.opacity = escala(carregar, 0, 100, 1, 0)
    bg.style.filter = `blur(${escala(carregar, 0, 100, 30, 0)}px)`
}

const escala = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}