import React from 'react'
import { connect } from 'react-redux'

import AddNote from '../vanilla/AddNote'
import { getNextNoteId } from './selectors'
import { addNote } from './actions'

const mapStateToProps = (state) => {
  return {
    nextNoteId: getNextNoteId(state)
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps

  return {
    ...ownProps,
    onAdd: (note) => {
      dispatch(addNote({
        ...note,
        id: stateProps.nextNoteId
      }))
    }
  }
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(AddNote)
