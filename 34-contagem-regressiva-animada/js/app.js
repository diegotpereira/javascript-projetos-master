const numeros = document.querySelectorAll('.numeros span')
const contadora = document.querySelector('.contadora')
const mensagemFinal = document.querySelector('.final')
const repetir = document.querySelector('#repetir')

rodarAnimacao()

function definirDOM() {
    contadora.classList.remove('hide')
    mensagemFinal.classList.remove('show')

    numeros.forEach((numero) => {
        numero.classList.value = ''
    })

    numeros[0].classList.add('in')
}


function rodarAnimacao() {
    numeros.forEach((numero, index) => {
        const penultimo = numeros.length - 1

        numero.addEventListener('animacaoFinal', (e) => {

            if (e.animationNome === 'entre' && index !== penultimo) {

                numero.classList.remove('in')
                numero.classList.add('out')

            } else if (e.animationNome === 'sair' && numero.nextElementSibling) {
                numero.nextElementSibling.classList.add('in')

            } else {
                contadora.classList.add('hide')
                mensagemFinal.classList.add('show')
            }
        })
    })
}


repetir.addEventListener('click', () => {
    definirDOM()
    rodarAnimacao()
})