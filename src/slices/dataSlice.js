import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPokemonDetail, getPokemons } from '../api'
import { setLoading } from './uiSlice'

const initialState = {
  pokemons: [],
  searchPokemons: [],
  listPokemonsFavorites: [],
  isSearch: false,
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

    filterPokemonSearch: (state, action) => {
      if (action.payload.length > 0) {
        state.isSearch = true
        state.searchPokemons = action.payload
      } else {
        state.isSearch = false
      }
    },

    setFavorite: (state, action) => {
      const updateFavorite = (listPokemons, action) => {
        const currentPokemonIndexSearch = listPokemons.findIndex(
          (pokemon) => pokemon.id === action.payload.pokemonId
        )

        if (currentPokemonIndexSearch >= 0) {
          const isFavorite = listPokemons[currentPokemonIndexSearch].favorite

          listPokemons[currentPokemonIndexSearch].favorite = !isFavorite
        }
      }

      if (state.isSearch) {
        updateFavorite(state.searchPokemons, action)
      }

      updateFavorite(state.pokemons, action)

      const thisPokemon = state.pokemons.filter(
        (pokemon) => pokemon.id === action.payload.pokemonId
      )

      if (thisPokemon[0].favorite) {
        state.listPokemonsFavorites.push(thisPokemon[0])
      } else {
        state.listPokemonsFavorites = state.listPokemonsFavorites.filter(
          (pokemon) => pokemon.id !== action.payload.pokemonId
        )
      }
    },
  },
})

export const { setFavorite, setPokemons, filterPokemonSearch } = dataSlice.actions

export default dataSlice.reducer
