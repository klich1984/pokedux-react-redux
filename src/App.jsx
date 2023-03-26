import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchPokemonsWithDetails } from './slices/dataSlice'

import { Col, Spin } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logoPokedux from './assets/logoPokedux.svg'

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
  const loading = useSelector((state) => state.ui.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <div className='App'>
      <Col span={10} offset={7} className='logo-pokedux'>
        <img src={logoPokedux} alt='Pokedux' />
      </Col>
      <Col span={10} offset={7}>
        <Searcher />
      </Col>
      {loading ? (
        <Col>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  )
}

export default App
