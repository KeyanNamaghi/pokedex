import React from 'react'
import styled from 'styled-components'

import './App.css'

const colors = {
  black: '#000000',
  blue: '#0000FF',
  brown: '#A52A2A',
  gray: '#808080',
  green: '#008000',
  pink: '#FFC0CB',
  purple: '#800080',
  red: '#FF0000',
  white: '#FFFFFF',
  yellow: '#FFFF00'
}

const StyledCard = styled.div`
  :hover {
    background: ${(props) => colors[props.hoverColor] + '30' || 'red'};
  }
`

// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

const Card = ({ pokemon }) => {
  return (
    <StyledCard hoverColor={pokemon.color} className="projects__card">
      <img className="projects__card-image" alt={pokemon.name} src={baseURL + pokemon.id + '.png'} />
      <div className="projects__card-details">
        <strong className="projects__card-name">{pokemon?.name}</strong>
      </div>
    </StyledCard>
  )
}

export default Card
