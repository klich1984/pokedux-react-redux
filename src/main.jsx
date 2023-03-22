import React from 'react'
import ReactDOM from 'react-dom/client'
import thunk from 'redux-thunk'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { pokemonsReducer } from './reducers/pokemons'
import { addNumberToName, upperCaseFirstLetterName } from './middlewares'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancers = composeAlt(
  applyMiddleware(thunk, upperCaseFirstLetterName, addNumberToName)
)

const store = createStore(pokemonsReducer, composeEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
