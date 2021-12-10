const faixa = document.getElementById('faixa')

faixa.addEventListener('input', (e) => {

    const value = +e.target.value
    const label = e.target.nextElementSibling

    const faixa_largura = getComputedStyle(e.target).getPropertyValue('width')
    const label_largura = getComputedStyle(label).getPropertyValue('width')

    const num_largura = +faixa_largura.substring(0, faixa_largura.length - 2)
    const num_label_largura = +label_largura.substring(0, label_largura.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const esquerdo = value * (num_largura / max) - num_label_largura / 2 + scale(value, min, max, 10, -10)

    label.style.esquerdo = `${esquerdo}px`

    label.innerHTML = value

})

const scale = (num, in_min, in_max, out_min, out_max) => {

    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}