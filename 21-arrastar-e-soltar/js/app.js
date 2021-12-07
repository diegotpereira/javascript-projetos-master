const preencher = document.querySelector('.preencher')
const vazios = document.querySelectorAll('.vazio')

preencher.addEventListener('dragstart', dragStart)
preencher.addEventListener('dragend', dragEnd)

for (const vazio of vazios) {
    vazio.addEventListener('dragover', dragOver)
    vazio.addEventListener('dragenter', dragEnter)
    vazio.addEventListener('dragleave', dragLeave)
    vazio.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' segurar'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'preencher'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' suspenso'
}

function dragLeave() {
    this.className = 'vazio'
}

function dragDrop() {
    this.className = 'vazio'
    this.append(preencher)
}