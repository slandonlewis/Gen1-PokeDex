const searchBar = document.querySelector('#search')
const button = document.querySelector('#btn')
const infoSection = document.querySelector('#info')
const api = 'https://pokeapi.co/api/v2/pokemon'

const searchPokémon = (input) => {
    // return fetch(`${apiKey}/${input.toLowerCase()}`)
    //     .then((resp) => resp.json())
    //     .then(
    //         console.log(resp)
    //     )
}

fetch(`${api}/bulbasaur`)
    .then(res => res.json())
    .then(
        (pokemonData) => {
            console.log(pokemonData)
        }
    )