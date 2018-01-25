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
      filterText: ''
    }
  }

  setFilterText(filterText) {
    this.setState({ filterText })
  }

  render() {
    return (
      <React.Fragment>

        <Header
          filterText={this.state.filterText}
          onFilterChange={this.setFilterText.bind(this)} />

        <Grid
          pets={filterPets(this.props.pets, this.state.filterText)}
          onRemove={this.props.onRemove} />

      </React.Fragment>
    )
  }

}

App.propTypes = {
  pets: Grid.propTypes.pets
}

export default connect(
(state) => ({
  pets: state.pets
}),
(dispatch) => ({})
)(App)
