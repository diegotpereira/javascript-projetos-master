const buscar = document.querySelector('.buscar')
const btn = document.querySelector('.btn')
const entrada = document.querySelector('.entrada')

btn.addEventListener('click', () => {
    buscar.classList.toggle('ativo')
    entrada.focus()
})