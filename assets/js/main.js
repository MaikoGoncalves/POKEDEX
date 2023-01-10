function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}



function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#${pokemon.id}</span>
                <samp class="name">${pokemon.name}</samp>
                 
                <div class="detail">
                    <ol class="types">
                            ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>                
             </li>
    `
}
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
       //.map e percorre a lista 
       //.join junta a lista ('')= sem espaço.
              
       pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
       
       /*const newList = pokemons.map((pokemon) => {
          return convertPokemonToLi(pokemon) })
            const newHtml = newList.join('')
            pokemonList.innerHTML += newHtml*/
        
    })
    