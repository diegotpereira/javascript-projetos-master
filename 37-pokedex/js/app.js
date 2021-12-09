const poke_container = document.getElementById('poke-container')
const pokemon_contador = 150
const cores = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_tipos = Object.keys(cores)

const buscar_Pokemons = async() => {

    for (let i = 1; i <= pokemon_contador; i++) {

        await buscarPokemon(i)
    }
}

const buscarPokemon = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()

    criarCartaoPokemon(data)
}

const criarCartaoPokemon = (pokemon) => {

    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const id = pokemon.id.toString().padStart(2, '0')

    const poke_tipos = pokemon.types.map(tipo => tipo.type.name)
    const tipo = main_tipos.find(tipo => poke_tipos.indexOf(tipo) > -1)
    const cor = cores[tipo]

    pokemonEl.style.backgroundColor = cor

    const pokemonInnerHTML = `
       <div class="img-container">
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${nome}">
       </div>
       <div>
           <span class="numero">#${id}</span>
           <h3 class="nome">${nome}</h3>
           <small class="tipo">Tipo: <span>${tipo}</span> </small>
       </div>`

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

buscar_Pokemons()