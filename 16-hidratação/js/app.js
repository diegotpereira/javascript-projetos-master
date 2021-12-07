const coposPequenos = document.querySelectorAll('.copo-pequeno')
const litros = document.getElementById('litros')
const percentual = document.getElementById('percentagem')
const Permaneceu = document.getElementById('permaneceu')

atualizarCopoGrande()

coposPequenos.forEach((copo, index) => {
    copo.addEventListener('click', () => coposluzAlta(index))
})

function coposluzAlta(index) {
    if (index === 7 && coposPequenos[index]
        .classList.contains("full"))

        index--

        else if (coposPequenos[index].classList.contains('full') &&
            !coposPequenos[index]
            .nextElementSibling.classList.contains('full')) {
            index--
        }

    coposPequenos.forEach((copo, index2) => {
        if (index2 <= index) {
            copo.classList.add('full')
        } else {
            copo.classList.remove('full')
        }
    })

    atualizarCopoGrande()
}

function atualizarCopoGrande() {
    const copoCheios = document.querySelectorAll('.copo-pequeno.full').length
    const totalCopos = coposPequenos.length

    if (copoCheios === 0) {
        percentual.style.visibility = 'hidden'
        percentual.style.height = 0

    } else {
        percentual.style.visibility = 'visible'
        percentual.style.height = `${copoCheios / totalCopos * 330}px`
        percentual.innerText = `${copoCheios / totalCopos * 100}%`
    }
}