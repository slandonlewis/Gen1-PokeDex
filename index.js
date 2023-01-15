const searchBar = document.querySelector('#search')
const button = document.querySelector('#btn')
const infoSection = document.querySelector('#info')
const api = 'https://pokeapi.co/api/v2/pokemon'

button.addEventListener('click', (evt) => {
    let inputValue = searchBar.value
    if (inputValue === '') {
        window.alert('Please enter a Pokémon')
    } else {
        searchPokémon(inputValue)
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
            }
        )
}