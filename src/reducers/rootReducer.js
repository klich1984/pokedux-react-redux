import { combineReducers } from 'redux-immutable'
import { pokemonsReducer } from './pokemons'
import { uiReducer } from './uiReducer'

const rootRducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
})

export default rootRducer
