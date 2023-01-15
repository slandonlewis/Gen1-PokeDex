const searchBar = document.querySelector('#search')
const button = document.querySelector('#btn')
const infoSection = document.querySelector('#info')
const api = 'https://pokeapi.co/api/v2/pokemon'

const searchPokémon = (input) => {
    fetch(`${api}/${input.toLowerCase()}`)
        .then(res => res.json())
        .then(
            (pokemonData) => {
                infoSection.innerHTML =
                    JSON.stringify(pokemonData)
            }
        )
}

searchPokémon('bulbasaur')