// const tetchPokemon = () => {
//   const url = `https://pokeapi.co/api/v2/pokemon/`
//   fetch(`url`);
//     .then(response => response.json)
//     .then(25 => {
//     console.log(25)
//   })
// }

// tetchPokemon();

function fetchKantoPokemon(){
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=300`)
  .then(response => response.json())
  .then(allpokemon => console.log(allpokemon))
}

fetchKantoPokemon();