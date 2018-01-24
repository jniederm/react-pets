import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import loggerMiddleware from 'redux-logger'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
