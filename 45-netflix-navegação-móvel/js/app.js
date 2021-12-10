const abrirBtn = document.querySelector('.abrir-btn')
const fecharBtn = document.querySelector('.fechar-btn')
const nav = document.querySelectorAll('.nav')

abrirBtn.addEventListener('click', () => {

    nav.forEach(navEl => navEl.classList.add('visible'))
})

fecharBtn.addEventListener('click', () => {

    nav.forEach(navEl => navEl.classList.remove('visible'))
})