const contadores = document.querySelectorAll('.contador')

contadores.forEach(contador => {
    contador.innerText = '0'

    const atualizarContador = () => {
        const target = +contador.getAttribute('data-target')

        const c = +contador.innerText

        const incremento = target / 200

        if (c < target) {
            contador.innerText = `${Math.ceil(c + incremento)}`

            setTimeout(atualizarContador, 1)

        } else {
            contador.innerText = target
        }
    }

    atualizarContador()
})