export const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const pokemon = await response.json()
  return pokemon.results.map((item: any, i: any) => {
    return { ...item, index: i + 1 }
  })
  //   const dataResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.results[0].name)
  //   const pokemonData = await dataResponse.json()
}
