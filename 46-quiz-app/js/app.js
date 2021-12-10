const perguntaDados = [{
        pergunta: "Qual idioma é executado em um navegador da web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",

        correto: "d",
    },

    {
        pergunta: "O que CSS significa?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",

        correto: "b",
    },

    {
        pergunta: "O que significa HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",

        correto: "a",
    },

    {
        pergunta: "Em que ano o JavaScript foi lançado?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",

        correto: "b",
    },
]

const quiz = document.getElementById('quiz')
const responderEls = document.querySelectorAll('.responder')
const perguntaEl = document.getElementById('pergunta')

const a_texto = document.getElementById('a_texto')
const b_texto = document.getElementById('b_texto')
const c_texto = document.getElementById('c_texto')
const d_texto = document.getElementById('d_texto')

const enviarBtn = document.getElementById('enviar')

let atualPergunta = 0

let pontuacao = 0

carregarPerguntas()


function carregarPerguntas() {

    desmarqueRespostas()

    const dadosQuestionarioAtual = perguntaDados[atualPergunta]

    perguntaEl.innerText = dadosQuestionarioAtual.pergunta

    a_texto.innerText = dadosQuestionarioAtual.a
    b_texto.innerText = dadosQuestionarioAtual.b
    c_texto.innerText = dadosQuestionarioAtual.c
    d_texto.innerText = dadosQuestionarioAtual.d

}

function desmarqueRespostas() {
    responderEls.forEach(responderEl => responderEl.checked = false)
}

function buscarSelecionados() {

    let responder

    responderEls.forEach(responderEl => {

        if (responderEl.checked) {

            responder = responderEl.id
        }
    })

    return responder
}


enviarBtn.addEventListener('click', () => {

    const responder = buscarSelecionados()

    if (responder) {

        if (responder === perguntaDados[atualPergunta].correto) {

            pontuacao++
        }

        atualPergunta++

        if (atualPergunta < perguntaDados.length) {

            carregarPerguntas()

        } else {

            pergunta.innerHTML = `
                    <h2>Você respondeu ${pontuacao}/${perguntaDados.length} perguntas corretamente</h2>
                    <button onClick="location.reload()">Carregar</button>`

        }
    }
})