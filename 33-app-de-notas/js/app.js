const adicionarBtn = document.getElementById('adicionar')

const notas = JSON.parse(localStorage.getItem('notas'))

if (notas) {
    notas.forEach(nota => adicionarNovaNota(nota))
}

adicionarBtn.addEventListener('click', () => adicionarNovaNota())

function adicionarNovaNota(texto = '') {

    const nota = document.createElement('div')
    nota.classList.add('nota')

    nota.innerHTML =
        `
        <div class="tools">
            <button class="editar"><i class="fas fa-edit"></i></button>
            <button class="deletar"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${texto ? "" : "hidden"}"></div>
        <textarea class="${texto ? "hidden" : ""}"></textarea>
        `

    const editarBtn = nota.querySelector('.editar')
    const deletarBtn = nota.querySelector('.deletar')
    const main = nota.querySelector('.main')
    const textArea = nota.querySelector('textarea')

    textArea.value = texto
    main.innerHTML = marked(texto)


    deletarBtn.addEventListener('click', () => {
        nota.remove()

        atualizarLS()
    })

    editarBtn.addEventListener('click', () => {

        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {

        const { value } = e.target

        main.innerHTML = marked(value)

        atualizarLS()
    })

    document.body.appendChild(nota)
}

function atualizarLS() {
    const notasTexto = document.querySelectorAll('textarea')

    const notas = []

    notasTexto.forEach(nota => notas.push(nota.value))

    localStorage.setItem('notas', JSON.stringify(notas))
}