const sons = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sons.forEach(som => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = som

    btn.addEventListener('click', () => {
        pararSom()

        document.getElementById(som).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function pararSom() {
    sons.forEach(som => {
        const musica = document.getElementById(som)

        musica.pause()
        musica.currentTime = 0
    })
}

window.onload = () => {
    //write your code here
}