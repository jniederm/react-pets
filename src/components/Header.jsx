import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { randomPet } from './utils'
import { addPet, fetchEpicPets } from '../actions'

const Header = ({ filterText, onFilterChange, onAdd, onEpic, isLoading }) => (
  <div className='container' id="header">
    <div className="columns">
      <div className="column col-12">
        <h1>React Pets</h1>
      </div>
    </div>

    <div className='columns'>
      <div className='column col-4 col-mx-auto'>
        <input type='text'
          placeholder='Filter pets by name'
          value={filterText}
          onChange={event => { onFilterChange(event.target.value) }}
          id="filter-input"/>
      </div>

      <div className='column col-2 col-mx-auto'>
        <button className='btn mx-2'
          onClick={event => { onAdd(randomPet()) }}>
          <i className='icon icon-plus'></i>
        </button>
        <button className='btn mx-2'
          onClick={event => { onEpic() }}>
          <i className='icon icon-emoji'></i>
        </button>
        {isLoading && (<div className='loading mx-2' id="loader"></div>)}
      </div>

    </div>
  </div>
)

Header.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onEpic: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default connect(
  (state) => ({
    isLoading: state.isLoading
  }),
  (dispatch) => ({
    onAdd: (petId) => dispatch(addPet(petId)),
    onEpic: () => dispatch(fetchEpicPets())
  })
)(Header)
