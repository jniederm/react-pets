import { ADD_PET, REMOVE_PET, SET_PETS } from '../constants'

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
      const maxId = Math.max(...Object.keys(state.pets)
        .map((num) => +num))
      const newPets = Object.assign({}, state.pets)
      newPets[maxId + 1] = action.payload
      return Object.assign({}, state, { pets: newPets })
    case REMOVE_PET:
      const newState = Object.assign({}, state)
      newState.pets = Object.assign({}, newState.pets)
      delete newState.pets[action.payload]
      return newState
    case SET_PETS:
      return Object.assign({}, state, { pets: action.payload })
    default:
      return state
  }
}
