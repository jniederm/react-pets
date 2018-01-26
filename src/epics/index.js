import { Observable } from 'rxjs'

import { FETCH_EPIC_PETS } from '../constants'
import { setPets, setLoading } from '../actions'

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

export default (action$) => {
  const throttledClicks = action$
    .filter(action => action.type === FETCH_EPIC_PETS)
    .throttleTime(5000)
  const showLoader = throttledClicks
    .mapTo(setLoading(true))
  const loadingDone = throttledClicks
    .map(downloadPets)
    .mergeAll()
    .map(loadedPets => [setPets(loadedPets), setLoading(false)])
    .mergeAll()
  return Observable.merge(showLoader, loadingDone)
}
