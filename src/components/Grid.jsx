import React from 'react'
import PropTypes from 'prop-types'
import Card, { PetDataShape } from './Card'

const Grid = ({ pets = {} }) => (
  <div className='container'>
    <div className='columns'>

    </div>
  </div>
)

Grid.propTypes = {
  pets: PropTypes.objectOf(PropTypes.shape({
    ...PetDataShape
  })),
}

export default Grid
