import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Grid from './Grid'

function filterPets(allPets, filterText) {
  if (!filterText) {
    return allPets
  }
  return Object.keys(allPets)
    .filter( key => {
      return allPets[key].name.toLowerCase().includes(filterText.toLowerCase())
    })
    .reduce( (res, key) => (res[key] = allPets[key], res), {} )
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      pets: props.pets
    }
    this.maxId = 4
    this.addPets = this.addPets.bind(this)
    this.removePets = this.removePets.bind(this)
  }

  setFilterText(filterText) {
    this.setState({ filterText })
  }

  addPets (pet) {
    const pets = this.state.pets
    pets[this.maxId] = pet
    this.maxId++
    this.setState({ pets })
  }

  removePets (petId) {
    const pets = this.state.pets
    delete pets[petId]
    this.setState({ pets })
  }

  render() {
    return (
      <React.Fragment>

        <Header
          filterText={this.state.filterText}
          onFilterChange={this.setFilterText.bind(this)}
          onAdd={this.addPets}
          />

        <Grid
          pets={filterPets(this.state.pets, this.state.filterText)}
          onRemove={this.removePets}
          />

      </React.Fragment>
    )
  }

}

App.propTypes = {
  pets: Grid.propTypes.pets
}

export default App
