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
                    JSON.stringify(pokemonData)
            }
        )
}