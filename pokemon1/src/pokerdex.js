const fetchPokemon = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = [];
  
  for (let indice = 1; indice <= 50; indice += 1) {
    pokemonPromises.push(fetch(getPokemonUrl(indice)).then(response => response.json()));
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {
      // console.log(pokemon);

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
        accumulator += `<li class="card">
        <h2 class="card-title>${pokemon.id} ${pokemon.name}</h2>
        <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
        
        </li>`
        return accumulator;
      }, '')

      console.log(lisPokemons)
  })
}

fetchPokemon();