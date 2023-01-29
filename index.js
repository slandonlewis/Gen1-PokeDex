const searchBar = document.querySelector('#search')
const button = document.querySelector('#btn')
const addBtn = document.querySelector('#add')
const infoSection = document.querySelector('#info')
const ownEl = document.querySelector('#own')
const api = 'https://pokeapi.co/api/v2/pokemon'
const list = document.querySelector('#pokemon-list')
const viewListBtn = document.querySelector('#view-list-button')
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
        caught.sort((a, b) => (a.id > b.id) ? 1 : -1)
        ownEl.innerHTML = `Total Caught: ${caught.length}`
    }
})

viewListBtn.addEventListener('click', (evt) => {
    toggleOwnedList()
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
            Moves: <br>
            <div id='moves'>
            <ul>
            ${pokemonData.moves.map(_moves => `<li>${_moves.move.name}</li>`).join(' ')}
            </ul>
            </div>`
                addBtn.className = ''
                currentPokemon = pokemonData
            }
        )
}

const toggleOwnedList = () => {
    if (list.className === 'hide') {
        viewListBtn.textContent = 'Close List'
        list.className = ''
        list.innerHTML = `
        ${caught.map(pkmn =>
            `<li>No. ${pkmn.id} - ${pkmn.name.toUpperCase()}`)
                .join(' ')}`
    } else {
        viewListBtn.textContent = 'View Owned List'
        list.className = 'hide'
        list.innerHTML = ''
    }
}