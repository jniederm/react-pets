import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// pet names must be unique
const initialData = [
  {
    name: 'Rex',
    kind: 'dog'
  },
  {
    name: 'Fluffy',
    kind: 'cat'
  },
  {
    name: 'Destroyer of Worlds',
    kind: 'hamster'
  }
]

ReactDOM.render(
  <App pets={initialData} />,
  document.getElementById('app')
)
