import { FETCH_EPIC_PETS } from '../constants'
import { setPets } from '../actions'

const epicPets = {
  1: {
    name: 'T-Rex',
    kind: 'epic'
  },
  2: {
    name: 'Non-binary Dragon',
    kind: 'epic'
  }
}

function downloadPets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(epicPets)
    }, 1337)
  })
}

export default (action$) => (
  action$
    .filter(action => action.type === FETCH_EPIC_PETS)
    .map(downloadPets)
    .mergeAll()
    .map(setPets)
)
