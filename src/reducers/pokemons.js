import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from '../actions/types'

const initialState = {
  pokemons: [],
  loading: false,
}

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      }

    case SET_FAVORITE:
      const newListPokemons = [...state.pokemons]
      const currentPokemonIndex = newListPokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      )

      if (currentPokemonIndex < 0) return state

      newListPokemons[currentPokemonIndex].favorite =
        !newListPokemons[currentPokemonIndex].favorite

      return { ...state, pokemons: newListPokemons }

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
