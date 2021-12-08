const botao = document.getElementById('botao')
const notificacoes = document.getElementById('notificacoes')

const mensagens = [
    'Mensagem Um',
    'Mensagem Dois',
    'mensagem Três',
    'Mensagem Quatro'
]

const tipos = ['info', 'sucesso', 'erro']

botao.addEventListener('click', () => criarNotificacao())

function criarNotificacao(mensagem = null, tipo = null) {

    const notif = document.createElement('div')
    notif.classList.add('notificacao')
    notif.classList.add(tipo ? tipo : buscarTipoAleatorio())

    notif.innerText = mensagem ? mensagem : buscarMensagemAleatoria()

    notificacoes.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function buscarMensagemAleatoria() {

    return mensagens[Math.floor(Math.random() * mensagens.length)]
}

function buscarTipoAleatorio() {

    return tipos[Math.floor(Math.random() * tipos.length)]
}