const paineis = document.querySelectorAll('.painel')

paineis.forEach((painel) => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('ativo')
    })
})

function removeActiveClasses() {
    paineis.forEach(painel => {
        painel.classList.remove('ativo')
    })
}