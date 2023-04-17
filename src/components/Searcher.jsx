import React from 'react'
import { Input } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { filterPokemonSearch } from '../slices/dataSlice.js'
import { setFilled, setValue } from '../slices/searchSlice'

const Searcher = () => {
  const state = useSelector((state) => state.data, shallowEqual)
  const loading = useSelector((state) => state.ui.loading)
  const search = useSelector((state) => state.search, shallowEqual)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setValue(e.target.value))
    if (e.target.value !== '') {
      const searchResult = state.pokemons.filter((pokemon) => {
        const name = pokemon.name.toLocaleLowerCase()
        const value = e.target.value.toLocaleLowerCase()

        return name.includes(value)
      })
      dispatch(filterPokemonSearch(searchResult))
    } else {
      dispatch(filterPokemonSearch([]))
    }
  }

  const handleBlur = () => {
    if (search.value === '') dispatch(setFilled(false))
  }

  const handleFocus = () => {
    dispatch(setFilled(true))
  }

  return (
    <>
      <Input
        id='search'
        placeholder='buscar pokemon'
        onChange={handleChange}
        disabled={loading}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete
      />
      <label className={`label ${search.filled ? 'filled' : ''}`} htmlFor='search'>
        buscar pokemon
      </label>
    </>
  )
}

export default Searcher
