const avaliacoes = document.querySelectorAll('.avaliacao')
const avaliacoesContainer = document.querySelector('.avaliacoes-container')
const enviarBtn = document.querySelector('#enviar')
const painel = document.querySelector('#painel')

let selecionaAvaliacao = 'Satisfeito'

avaliacoesContainer.addEventListener('click', (e) => {

    if (e.target.parentNode.classList.contains('avaliacao')) {

        // removerAtivo()
        selecionarAvaliacao(e.target.parentNode);

        // e.target.parentNode.classList.add('active')

        // selecionarAvaliacao = e.target.nextElementSibling.innerHTML
    } else if (e.target.classList.contains('avaliacao')) {

        selecionarAvaliacao(e.target);

        // removerAtivo()

        // e.target.classList.add('active')

        // selecionarAvaliacao = e.target.nextElementSibling.innerHTML
    }
})

enviarBtn.addEventListener('click', (e) => {
    painel.innerHTML = `
          <i class="fas fa-heart"></i>
          <strong>Obrigado a você!</strong>
          <br>
          <strong>Avaliação: ${selecionaAvaliacao}</strong>
          <p>Usaremos seus comentários para melhorar nosso suporte ao cliente</p>`
})

function selecionarAvaliacao(avaliacaoElemento) {

    removerAtivo()

    avaliacaoElemento.classList.add('active')

    selecionaAvaliacao = avaliacaoElemento.querySelector('small').innerText
}

function removerAtivo() {

    avaliacoes.forEach((avaliacao) => avaliacao.classList.remove('active'))

    // for (let i = 0; i < avaliacoes.length; i++) {

    //     avaliacoes[i].classList.remove('active')
    // }
}