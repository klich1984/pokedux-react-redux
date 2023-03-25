import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from '../actions/types'
import { fromJS, setIn, get, getIn } from 'immutable'

const initialState = fromJS({
  pokemons: [],
  loading: false,
})

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return setIn(state, ['pokemons'], fromJS(action.payload))

    case SET_FAVORITE:
      const currentPokemonIndex = get(state, 'pokemons').findIndex(
        (pokemon) => pokemon.get('id') === action.payload.pokemonId
      )

      if (currentPokemonIndex < 0) return state

      const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite'])

      return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)

    case SET_LOADING:
      return setIn(state, ['loading'], action.payload)
    default:
      return state
  }
}
