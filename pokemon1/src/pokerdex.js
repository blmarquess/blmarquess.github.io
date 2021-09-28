const fetchPokemon = () => {
  const getPokemonUrl = id => `https.pokeapi.co/api/v2/pokemon/${id}`

  for (let indice = 1; indice <= 50; indice += 1) {
    fetch(getPokemonUrl(indice)).then(response => response.json())
  }
}