import React from 'react'
import PropTypes from 'prop-types'
import Card, { PetDataShape } from './Card'

const Grid = ({ pets = {} }) => (
  <div className='container'>
    <div className='columns'>
      {Object.keys(pets).map(petId => (
        <div className='column col-3' key={petId}>
          <Card key={pets[petId].name}
            {...pets[petId]}
            petId={petId} />
        </div>
      ))}
    </div>
  </div>
)

Grid.propTypes = {
  pets: PropTypes.objectOf(PropTypes.shape({
    ...PetDataShape
  })),
}

export default Grid
