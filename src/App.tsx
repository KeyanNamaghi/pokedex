import React, { useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { fetchPokemon } from './api/fetchPokemon'
import Card from './Card'
import FilterPills from './FilterPills'
import { types } from './types'
import pokemonLogo from './Pokemon-Logo.png'

import './App.css'

const StyledInput = styled.input`
  padding: 10px 15px;
  margin: 20px;
  width: 75%;
  max-width: 400px;
  border-radius: 10px;
  border: 1px solid #ddd;
  text-align: center;
  outline: none;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  const { isLoading, isError, data: results } = useQuery('pokemon', fetchPokemon)
  const [search, setSearch] = useState('')
  const [filterPills, setFilterPills] = useState(Array(20).fill(false))

  // I hate reducers sorry
  const filterToFind = filterPills.reduce(function (arr, val, i) {
    if (val) arr.push(types[i])
    return arr
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const filteredBySearch = results?.filter((pokemon: { name: string }) => pokemon?.name.includes(search.toLowerCase()))

  const filteredByType = filteredBySearch?.filter((pokemon: { types: string[] }) => {
    const val = filterToFind.reduce(
      (accumulator: boolean, currentValue: string) => accumulator && pokemon?.types?.includes(currentValue),
      true
    )
    return val
  })

  if (isLoading) return <div>loading</div>

  if (isError) return <div>Error</div>

  const cards = filteredByType.map((pokemon: any) => <Card pokemon={pokemon} key={pokemon.name} />)

  return (
    <>
      <StyledContainer>
        <img src={pokemonLogo} alt="pokemon logo" width={300} />
        <StyledInput type="text" value={search} onChange={handleChange} placeholder="Search" />
      </StyledContainer>
      <FilterPills props={{ filterPills, setFilterPills }} />
      <div className="projects__body">{cards}</div>
    </>
  )
}

export default App
