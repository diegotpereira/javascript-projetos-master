const container = document.querySelector('.container')
const imgsURL = 'https://source.unsplash.com/random/'
const filas = 5

for (let i = 0; i < filas * 3; i++) {

    const img = document.createElement('img')
    img.src = `${imgsURL}${buscarTamanhoAleatorio()}`
    container.appendChild(img)
}


function buscarTamanhoAleatorio() {

    return `${buscarNumeroAleatorio()}x${buscarNumeroAleatorio()}`
}

function buscarNumeroAleatorio() {

    return Math.floor(Math.random() * 10) + 300
}