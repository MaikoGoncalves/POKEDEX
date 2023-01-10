
const pokeApi = {}

// Promise 
// Fetch usa o GET

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = ` https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((responde) => responde.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}