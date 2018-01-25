import { ADD_PET } from '../constants'

const initialState = {
  pets: {
    1: {
      name: 'Rex',
      kind: 'dog'
    },
    2: {
      name: 'Fluffy',
      kind: 'cat'
    },
    3: {
      name: 'Destroyer of Worlds',
      kind: 'hamster'
    }
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PET:
      const maxId = Object.keys(state.pets).length + 1
      const newPets = Object.assign({}, state.pets)
      newPets[maxId] = action.payload
      return Object.assign({}, state, { pets: newPets })
    default:
      return state
  }
}
