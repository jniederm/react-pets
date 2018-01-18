import React from 'react'

export default () => (
  <div className="columns">

    <div className="column">
      <input type="text" placeholder="Filter" />
    </div>

    <div className="column">
      <div className="dropdown">
        <a href="#" className="btn btn-link dropdown-toggle">
          Kind <i className="icon icon-caret"></i>
        </a>
        <ul className="menu">
          <li className="menu-item">
            <a href="#">Cat</a>
          </li>
          <li className="menu-item">
            <a href="#">Dog</a>
          </li>
          <li className="menu-item">
            <a href="#">Monkey</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="column">
      <button className="btn">New</button>
    </div>

  </div>
)
