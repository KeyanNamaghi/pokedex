import React from 'react'

import './App.css'

// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

const Card = ({ pokemon, index }: any) => {
  return (
    <div className="projects__card" key={pokemon.name}>
      <img className="projects__card-image" alt={pokemon.name} src={baseURL + pokemon.index + '.png'} />
      <div className="projects__card-details">
        <strong className="projects__card-name">{pokemon?.name}</strong>
      </div>
    </div>
  )
}

export default Card
