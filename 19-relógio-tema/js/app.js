const horaEl = document.querySelector('.hora')
const minutoEl = document.querySelector('.minuto')
const segundoEl = document.querySelector('.segundo')
const tempoEl = document.querySelector('.tempo')
const dataEl = document.querySelector('.data')
const toggle = document.querySelector('.toggle')

const dias = ["Sábado", "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

toggle.addEventListener('click', (e) => {

    const html = document.querySelector('html')

    html.classList.toggle('escuro')

    if (html.classList.contains('escuro')) {
        html.classList.remove('escuro')
        e.target.innerHTML = 'Modo escuro'

    } else {
        html.classList.add('escuro')
        e.target.innerHTML = 'Modo claro'
    }
})

function definirTempo() {

    const tempo = new Date()
    const mes = tempo.getMonth()
    const dia = tempo.getDay()
    const data = tempo.getDate()
    const horas = tempo.getHours()
    const horasParaRelogio = horas >= 13 ? horas % 12 : horas
    const minutos = tempo.getMinutes()
    const segundos = tempo.getSeconds()
    const ampm = horas >= 12 ? 'PM' : 'AM'

    horaEl.style.transform = `translate(-50%, -100%) rotate(${scale(horasParaRelogio, 0, 12, 0, 360)}deg)`
    minutoEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutos, 0, 60, 0, 360)}deg)`
    segundoEl.style.transform = `translate(-50%, -100%) rotate(${scale(segundos, 0, 60, 0, 360)}deg)`

    tempoEl.innerHTML = `${horasParaRelogio}:${minutos < 10 ? ` 0${minutos}` : minutos} ${ampm}`
    dataEl.innerHTML =  `${dias[dia]}, ${meses[mes]} <span class="circulo">${data}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

definirTempo()

setInterval(definirTempo, 1000)