import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { fetchPokemon } from './api/fetchPokemon'
import Card from './Card'
import FilterPills from './FilterPills'
import { types } from './types'

import './App.css'

const App = () => {
  const { isLoading, data: results } = useQuery('pokemon', fetchPokemon)
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

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
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

  const cards = filteredByType.map((pokemon: any) => <Card pokemon={pokemon} key={pokemon.name} />)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={search} onChange={handleChange} />
        </label>
      </form>
      <FilterPills props={{ filterPills, setFilterPills }} />
      <div className="projects__body">{cards}</div>
    </div>
  )
}

export default App
