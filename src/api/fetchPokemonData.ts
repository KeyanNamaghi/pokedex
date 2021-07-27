export const fetchPokemonData = async (name: string) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
  const pokemon = await response.json()
  return pokemon
}
