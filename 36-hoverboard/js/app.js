const container = document.getElementById('container')
const cores = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const quadrados = 500

for (let i = 0; i < quadrados; i++) {

    const quadrado = document.createElement('div')
    quadrado.classList.add('quadrado')

    quadrado.addEventListener('mouseover', () => definirCor(quadrado))
    quadrado.addEventListener('mouseout', () => removerCor(quadrado))

    container.appendChild(quadrado)
}

function definirCor(elemento) {

    const cor = buscarCorAleatoria()
    elemento.style.background = cor
    elemento.style.boxShadow = `0 0 2px ${cor}, 0 0 10px ${cor}`
}

function removerCor(elemento) {
    elemento.style.background = '#1d1d1d'
    elemento.style.boxShadow = '0 0 2px #000'
}

function buscarCorAleatoria() {

    return cores[Math.floor(Math.random() * cores.length)]
}