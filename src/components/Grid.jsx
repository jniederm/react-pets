import React from 'react'
import PropTypes from 'prop-types'
import Card, { PetDataShape } from './Card'

const Grid = ({ pets = [], onRemove }) => (
  <div className='container'>
    <div className='columns'>

      {pets.map(pet => (
        <div className='column col-3' key={pet.name}>
          <Card key={pet.name}
            {...pet}
            onRemove={() => onRemove(pet.name)} />
        </div>
      ))}

    </div>
  </div>
)

Grid.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape({
    ...PetDataShape
  })),
  onRemove: PropTypes.func.isRequired
}

export default Grid
