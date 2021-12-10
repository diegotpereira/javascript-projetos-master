const resultado = document.getElementById('resultado')
const filtro = document.getElementById('filtro')
const listaItens = []

buscarDado()

filtro.addEventListener('input', (e) => filtrarDado(e.target.value))

async function buscarDado() {

    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // limpar resultado
    resultado.innerHTML = ''

    results.forEach(user => {

        const li = document.createElement('li')

        listaItens.push(li)

        li.innerHTML = `
           <img src="${user.picture.large}" alt="${user.name.first}">
           <div class="usuario-info">
               <h4>${user.name.first} ${user.name.last}</h4>
               <p>${user.location.city}, ${user.location.country}</p>
           </div>`

        resultado.appendChild(li)
    })
}

// Busca por termo
function filtrarDado(buscarTermo) {

    listaItens.forEach(item => {

        if (item.innerText.toLowerCase().includes(buscarTermo.toLowerCase())) {

            item.classList.remove('hide')

        } else {

            item.classList.add('hide')
        }
    })
}