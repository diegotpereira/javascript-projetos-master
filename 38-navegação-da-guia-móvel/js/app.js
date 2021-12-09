const conteudos = document.querySelectorAll('.content')
const listaItens = document.querySelectorAll('nav ul li')

listaItens.forEach((item, index) => {
    item.addEventListener('click', () => {

        ocultarTodoConteudo()
        ocultarTodosItens()

        item.classList.add('active')
        conteudos[index].classList.add('show')

    })
})

function ocultarTodoConteudo() {

    conteudos.forEach(content => content.classList.remove('show'))
}

function ocultarTodosItens() {

    listaItens.forEach(item => item.classList.remove('active'))
}