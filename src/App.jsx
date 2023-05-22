import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchPokemonsWithDetails } from './slices/dataSlice'

import { Col, Spin } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logoPokedux from './assets/logoPokedux.svg'

function App() {
  const state = useSelector((state) => state.data, shallowEqual)
  const loading = useSelector((state) => state.ui.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <div className='App'>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        className='logo-pokedux'
      >
        <img src={logoPokedux} alt='Pokedux' />
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        className='search-pokemon'
      >
        <Searcher />
      </Col>
      {loading ? (
        <Col>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={state.isSearch ? state.searchPokemons : state.pokemons} />
      )}
    </div>
  )
}

export default App
