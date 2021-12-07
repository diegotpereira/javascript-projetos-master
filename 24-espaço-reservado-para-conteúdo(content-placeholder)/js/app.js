const header = document.getElementById('header')
const titulo = document.getElementById('titulo')
const extrato = document.getElementById('extrato')
const perfil_img = document.getElementById('perfil_img')
const nome = document.getElementById('nome')
const data = document.getElementById('data')

const animacao_bgs = document.querySelectorAll('.animacao-bg')
const animacao_bgs_textos = document.querySelectorAll('.animacao-bg-texto')


setTimeout(buscarData, 2500)

function buscarData() {
    header.innerHTML =

        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'

    titulo.innerHTML = 'Lorem ipsum dolor sit amet'

    extrato.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'

    perfil_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'

    nome.innerHTML = 'Daniel Johns'
    data.innerHTML = '07 de Dezembro de 2021'

    animacao_bgs.forEach((bg) => bg.classList.remove('animacao-bg'))
    animacao_bgs_textos.forEach((bg) => bg.classList.remove('animacao-bg-texto'))
}