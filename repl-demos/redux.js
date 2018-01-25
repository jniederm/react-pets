// load to node REPL using `.load repl-demos/redux.js`

const { createStore } = require('redux')

const initialState = [1, 2]

/**
 * @param  state original state
 * @param {{type: string, payload: any}} action
 */
const reducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NUMBER': {
      const newState = [].concat(state)
      newState.push(action.payload)
      return newState
    }
  }
  return state
}

const store = createStore(reducers, initialState)

console.log('current state: ', store.getState())

store.dispatch({
  type: 'ADD_NUMBER',
  payload: 3
})

console.log('current state: ', store.getState())

store.subscribe(() => console.log('state has changed, new state:', store.getState()))

store.dispatch({
  type: 'ADD_NUMBER',
  payload: 4
})

store.dispatch({
  type: 'ADD_NUMBER',
  payload: 5
})

store.dispatch({
  type: 'FOO_ACTION',
  payload: 'bar'
})


