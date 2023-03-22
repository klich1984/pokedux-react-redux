import { getPokemonDetail } from '../api'
import { SET_POKEMONS } from './types'

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
})

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetail(pokemon))
    )

    dispatch(setPokemons(pokemonDetails))
  }
