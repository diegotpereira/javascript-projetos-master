const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const buscar = document.getElementById('buscar')

buscarFilmes(API_URL)

async function buscarFilmes(url) {
    const res = await fetch(url)
    const data = await res.json()

    exibirFilmes(data.results)

}

function exibirFilmes(filmes) {
    main.innerHTML = ''

    filmes.forEach((filme) => {
        const { title, poster_path, vote_average, overview } = filme

        const filmeEl = document.createElement('div')
        filmeEl.classList.add('filme')


        filmeEl.innerHTML = `
               <img src="${IMG_PATH + poster_path}" alt="${title}">
               <div class="filme-info">
                  <h3>${title}</h3>
                  <span class="${exibirPorAvaliacao(vote_average)}">${vote_average}</span>
               </div>
               <div class="visaoGeral">
                  <h3>SINOPSE & INFO</h3>
                  ${overview}
               </div>
               `
        main.appendChild(filmeEl)
    })
}

function exibirPorAvaliacao(voto) {

    if (voto >= 8) {

        return 'green'

    } else if (voto >= 5) {

        return 'orange'

    } else {

        return 'red'
    }
}

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const buscarTermo = buscar.value

    if (buscarTermo && buscarTermo !== '') {

        buscarFilmes(SEARCH_API + buscarTermo)

        buscar.value = ''

    } else {
        window.location.reload()
    }
})