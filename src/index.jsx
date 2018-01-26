import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { randomPet } from './components/utils'

const pets = {
  1: randomPet(),
  2: randomPet(),
  3: randomPet()
}

ReactDOM.render(
  <App pets={pets} />,
  document.getElementById('app')
)
