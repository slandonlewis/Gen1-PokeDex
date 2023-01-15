const searchBar = document.querySelector('#search')
const button = document.querySelector('#btn')
const addBtn = document.querySelector('#add')
const infoSection = document.querySelector('#info')
const ownEl = document.querySelector('#own')
const api = 'https://pokeapi.co/api/v2/pokemon'
let currentPokemon
let caught = []

button.addEventListener('click', (evt) => {
    let inputValue = searchBar.value
    if (inputValue === '') {
        window.alert('Please enter a Pokémon')
    } else {
        searchPokémon(inputValue)
    }
})

addBtn.addEventListener('click', (evt) => {
    if (currentPokemon.owned === true) {
        window.alert('Pokémon has already been caught')
    } else {
        currentPokemon.owned = true
        caught.push(currentPokemon)
        ownEl.innerHTML = `Total Caught: ${caught.length}`
    }
})

const searchPokémon = (input) => {
    fetch(`${api}/${input.toLowerCase()}`)
        .then(res => res.json())
        .then(
            (pokemonData) => {
                infoSection.innerHTML =
                    `<img src=${pokemonData.sprites.front_default}><br>
            Name: ${pokemonData.name.toUpperCase()}<br>
            Type: ${pokemonData.types.map(_type => ` ${_type.type.name.toUpperCase()}`)}<br>
            Weight: ${pokemonData.weight}<br>
            Height: ${pokemonData.height}<br>
            Moves: <br>${pokemonData.moves.map(_moves => ` ${_moves.move.name}`)}<br>`
                addBtn.className = ''
                currentPokemon = pokemonData
            }
        )
}