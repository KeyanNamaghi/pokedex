import React from 'react'
import styled from 'styled-components'
import { types } from './types'

const StyledPill = styled.button<any>`
  background: ${(props) => (props.active ? '#3D7DCA' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 1000px;

  :first-letter {
    text-transform: capitalize;
  }

  :hover {
    background: #ffcb05;
    color: black;
  }

  :focus {
    outline: none;
  }
`

const StyledPillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

interface FilterPillsProps {
  props: {
    filterPills: Array<boolean>
    setFilterPills: Function
  }
}

interface PillProps {
  type: string
  filterPills: Array<boolean>
  setFilterPills: Function
  index: number
}

const Pill = ({ type, filterPills, setFilterPills, index }: PillProps) => {
  const handleOnClick = () => {
    setFilterPills(
      filterPills.map((pillState, i) => {
        if (index !== i) {
          return pillState
        }
        return !pillState
      })
    )
  }

  return (
    <StyledPill onClick={handleOnClick} active={filterPills[index]}>
      <strong>{type}</strong>
    </StyledPill>
  )
}

const FilterPills = ({ props }: FilterPillsProps) => {
  const { filterPills, setFilterPills } = props

  return (
    <StyledPillContainer>
      {types.map((type, i) => (
        <Pill type={type} filterPills={filterPills} setFilterPills={setFilterPills} index={i} />
      ))}
    </StyledPillContainer>
  )
}

export default FilterPills
