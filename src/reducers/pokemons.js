import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from '../actions/types'
import { fromJS, setIn, get, getIn } from 'immutable'

const initialState = fromJS({
  pokemons: [],
  loading: false,
})

// Ejemplo de segundo nivel
// const initialState = fromJS({
//   pokemons: {
//     list: []
//   },
//   loading: false,
// })

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return {
      //   ...state,
      //   pokemons: action.payload,
      // }
      // return state.setIn(['pokemons', 'list'], propiedadACambiar) // Return con segundo nivel
      return setIn(state, ['pokemons'], fromJS(action.payload)) // Es un arreglo de JS

    case SET_FAVORITE:
      // const newListPokemons = [...state.pokemons]
      // const currentPokemonIndex = newListPokemons.findIndex(
      //   (pokemon) => pokemon.id === action.payload.pokemonId
      // )

      const currentPokemonIndex = get(state, 'pokemons').findIndex(
        (pokemon) => pokemon.get('id') === action.payload.pokemonId
      )

      if (currentPokemonIndex < 0) return state

      // newListPokemons[currentPokemonIndex].favorite =
      //   !newListPokemons[currentPokemonIndex].favorite
      // Forma 1
      // const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite')
      // Forma 2
      const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite'])

      // return { ...state, pokemons: newListPokemons }
      return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)

    case SET_LOADING:
      // return {
      //   ...state,
      //   loading: action.payload,
      // }
      return setIn(state, ['loading'], action.payload)
    default:
      return state
  }
}
