const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')


textArea.focus()

textArea.addEventListener('keyup', (e) => {

    criarTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        selecaoAleatoria()
    }
})

function criarTags(input) {
    const tags = input.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    })
}

function selecaoAleatoria() {
    const tempo = 30

    const intervalo = setInterval(() => {
        const aleatoriaTag = escolherAleatoriaTag()

        if (aleatoriaTag !== undefined) {
            luzAltaTag(aleatoriaTag)

            setTimeout(() => {
                unluzAltaTag(aleatoriaTag)
            }, 100)
        }
    }, 100)

    setTimeout(() => {

        clearInterval(intervalo)

        setTimeout(() => {

            const aleatoriaTag = escolherAleatoriaTag()

            luzAltaTag(aleatoriaTag)
        }, 100)
    }, tempo * 100)
}

function escolherAleatoriaTag() {
    tag.classList('highlight')
}

function luzAltaTag(tag) {
    tag.classList.add('highlight')
}

function unluzAltaTag(tag) {
    tag.classList.remove('highlight')
}