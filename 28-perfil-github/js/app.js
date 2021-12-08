const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const buscar = document.getElementById('buscar')

async function buscarUsuario(username) {

    try {
        const { data } = await axios(APIURL + username)

        criarCartaoUsuario(data)
        buscarRepositorio(username)

    } catch (err) {

        if (err.response.status == 404) {
            criarErroCartao('Nenhum perfil com este nome de usuário')
        }
    }
}

async function buscarRepositorio(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addRepositorioNoCartao(data)
    } catch (err) {
        criarErroCartao('Problema ao buscar repositórios')
    }
}

function criarCartaoUsuario(user) {

    const usuarioId = user.name || user.login
    const usuarioBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML =
        `<div class="cartao">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>

            <div class="usuario-info">
                <h2>${usuarioId}</h2>
                ${usuarioBio}

                <ul>
                <li>${user.followers} <strong> Seguidores</strong></li>
                <li>${user.following} <strong> Seguindo</strong></li>
                <li>${user.public_repos} <strong> Repositório</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
         </div>`

    main.innerHTML = cardHTML
}

function criarErroCartao(msg) {

    const cardHTML =
        `<div class="cartao">
         <h1>${msg}</h1>
       </div>`

    main.innerHTML = cardHTML
}

function addRepositorioNoCartao(repos) {

    const repositoriosEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {

            const repositorioEl = document.createElement('a')
            repositorioEl.classList.add('repo')
            repositorioEl.href = repo.html_url
            repositorioEl.target = '_blank'
            repositorioEl.innerText = repo.name

            repositoriosEl.appendChild(repositorioEl)
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = buscar.value

    if (user) {

        buscarUsuario(user)

        buscar.value = ''
    }
})