import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import loggerMiddleware from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import 'rxjs'
import App from './components/App'
import rootReducer from './reducers'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, loggerMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
