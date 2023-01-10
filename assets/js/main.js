
function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" >
                <span class="number">#${pokemon.number}</span>
                <samp class="name">${pokemon.name}</samp>
                 
                <div class="detail">
                    <ol class="types">
                            ${pokemon.types.map((type) => `<li class ="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
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
    