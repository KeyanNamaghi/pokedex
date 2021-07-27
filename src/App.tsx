import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { fetchPokemon } from './api/fetchPokemon'
import Card from './Card'

import './App.css'

const App = () => {
  const { isLoading, data: results } = useQuery('pokemon', fetchPokemon)
  const [search, setSearch] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  const filteredResults = results?.filter((pokemon: { name: string }) => pokemon?.name.includes(search.toLowerCase()))

  if (isLoading) return <div>loading</div>

  const cards = filteredResults.map((pokemon: any, index: number) => <Card pokemon={pokemon} />)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={search} onChange={handleChange} />
        </label>
      </form>
      <div className="projects__body">{cards}</div>
    </div>
  )
}

export default App
