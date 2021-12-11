const form = document.getElementById('form')
const input = document.getElementById('input')
const tarefasUL = document.getElementById('tarefas')


const tarefas = JSON.parse(localStorage.getItem('tarefas'))

if (tarefas) {

    tarefas.forEach(tarefa => addTarefa(tarefa))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTarefa()
})

function addTarefa(tarefa) {

    let tarefaTexto = input.value

    if (tarefa) {

        tarefaTexto = tarefa.texto
    }

    if (tarefaTexto) {

        const tarefaEl = document.createElement('li')

        if (tarefa && tarefa.completado) {

            tarefaEl.classList.add('completado')
        }


        tarefaEl.innerText = tarefaTexto

        tarefaEl.addEventListener('click', () => {

            tarefaEl.classList.toggle('completado')

            atualizarLista()
        })

        tarefaEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            tarefaEl.remove()
            atualizarLista()
        })

        tarefasUL.appendChild(tarefaEl)

        input.value = ''

        atualizarLista()
    }
}

function atualizarLista() {

    tarefaEl = document.querySelectorAll('li')

    const tarefas = []

    tarefaEl.forEach(tarefaEl => {
        tarefas.push({
            texto: tarefaEl.innerText,
            completado: tarefaEl.classList.contains('completado')
        })
    })

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}