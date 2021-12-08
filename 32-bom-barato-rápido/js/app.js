const toggles = document.querySelectorAll('.toggle')
const bom = document.querySelector('#bom')
const barato = document.querySelector('#barato')
const rapido = document.querySelector('#rapido')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => facaOTruque(e.target)))

function facaOTruque(oClicado) {

    if (bom.checked && barato.checked && rapido.checked) {

        if (bom === oClicado) {
            rapido.checked = false
        }

        if (barato === oClicado) {
            bom.checked = false
        }

        if (rapido === oClicado) {
            barato.checked = false
        }
    }
}