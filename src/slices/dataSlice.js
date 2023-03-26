import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPokemonDetail, getPokemons } from '../api'
import { setLoading } from './uiSlice'

const initialState = {
  pokemons: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    // 01 - Dispatch loader
    // 02 - fetch
    // 03 - Dispatch loader
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemons()
    const pokemonDetails = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetail(pokemon))
    )
    dispatch(setPokemons(pokemonDetails))
    dispatch(setLoading(false))
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },

    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      )

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite

        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }
    },
  },
})

export const { setFavorite, setPokemons } = dataSlice.actions

export default dataSlice.reducer
