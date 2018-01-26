import React from 'react'
import PropTypes from 'prop-types'

import { randomPet } from './utils'

const Header = () => (
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
          id="filter-input"/>
      </div>

      <div className='column col-2 col-mx-auto'>
        <button className='btn mx-2'>
          <i className='icon icon-plus'></i>
        </button>
      </div>

    </div>
  </div>
)

Header.propTypes = {
}

export default Header
