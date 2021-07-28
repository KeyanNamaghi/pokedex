const query = `query samplePokeAPIquery {
    pokemon: pokemon_v2_pokemonspecies(order_by: {id: asc}, where: {generation_id: {_eq: 1}}) {
      name
      id
      pokemon_v2_pokemoncolor {
        name
      }
      pokemon_v2_pokemons {
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
  `

export const fetchPokemon = async () => {
  const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
  const pokemon = await response.json()
  const data = pokemon.data.pokemon.map((pokemonData: any) => {
    return {
      name: pokemonData?.name,
      id: pokemonData?.id,
      color: pokemonData?.pokemon_v2_pokemoncolor.name,
      types: pokemonData?.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((item: any) => item.pokemon_v2_type.name)
    }
  })

  return data
  //   return pokemon.results.map((item: any, i: any) => {
  //     return { ...item, index: i + 1 }
  //   })
  //   const dataResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.results[0].name)
  //   const pokemonData = await dataResponse.json()
}
