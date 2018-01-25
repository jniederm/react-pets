import React from 'react'
import PropTypes from 'prop-types'
import { petImageUrl } from './utils'
import { connect } from 'react-redux'
import { removePet } from '../actions'

const Card = ({ name, kind, onRemove, petId }) => (
  <div className='card'>

    <div className='card-image'>
      <img src={petImageUrl(kind)} className='img-responsive'/>
    </div>

    <div className='card-header'>
      <div className='float-left'>
        <div className='card-title h5'>{name}</div>
        <div className='card-subtitle text-gray'>{kind || '(?)'}</div>
      </div>
      <button className='btn float-right' onClick={onRemove.bind(undefined, petId)}>
        <i className='icon icon-delete'></i>
      </button>
    </div>

  </div>
)

export const PetDataShape = {
  name: PropTypes.string.isRequired,
  kind: PropTypes.string
}

Card.propTypes = {
  ...PetDataShape,
  onRemove: PropTypes.func.isRequired,
  petId: PropTypes.string.isRequired
}


export default connect(
  (state) => ({}),
  (dispatch) => ({
    onRemove: (petId) => dispatch(removePet(petId))
  })
)(Card)
