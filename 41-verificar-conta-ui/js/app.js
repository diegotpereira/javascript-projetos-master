const codigos = document.querySelectorAll('.codigo')

codigos[0].focus()

codigos.forEach((codigo, index) => {

    codigo.addEventListener('keydown', (e) => {

        if (e.key >= 0 && e.key <= 9) {

            codigos[index].value = ''
            setTimeout(() => codigos[index + 1], focus(), 10)

        } else if (e.key === 'Backspace') {
            setTimeout(() => codigos[index - 1].focus(), 10)
        }
    })
})