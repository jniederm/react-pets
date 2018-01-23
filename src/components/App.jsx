import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Grid from './Grid'

function filterPets(allPets, filterText) {
  if (!filterText) {
    return allPets
  }

  return allPets.filter(pet => {
    return pet.name.toLowerCase().includes(filterText.toLowerCase())
  })
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pets: props.pets,
      filterText: ''
    }
  }

  addPet(newPet) {
    const petWithSameName = this.state.pets.find(pet => {
      return pet.name.toLowerCase() === newPet.name.toLowerCase()
    })

    if (!petWithSameName) {
      this.setState((prevState, props) => ({
        pets: [...prevState.pets, newPet]
      }))
    }
  }

  removePet(petName) {
    this.setState((prevState, props) => ({
      pets: prevState.pets.filter(pet => pet.name !== petName)
    }))
  }

  setFilterText(filterText) {
    this.setState({ filterText })
  }

  render() {
    return (
      <React.Fragment>

        <Header
          filterText={this.state.filterText}
          onFilterChange={this.setFilterText.bind(this)}
          onAdd={this.addPet.bind(this)} />

        <Grid
          pets={filterPets(this.state.pets, this.state.filterText)}
          onRemove={this.removePet.bind(this)} />

      </React.Fragment>
    )
  }

}

App.propTypes = {
  pets: Grid.propTypes.pets
}

export default App
