import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Grid from './Grid'

class App extends React.Component {

  render() {
    return (
      <React.Fragment>

        <Header />
        <Grid pets={this.props.pets} />

      </React.Fragment>
    )
  }

}

App.propTypes = {}

export default App
