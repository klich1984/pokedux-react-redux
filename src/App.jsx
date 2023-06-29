import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchPokemonsWithDetails } from './slices/dataSlice'

import { Col, Spin } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logoPokedux from './assets/logoPokedux.svg'
import { Footer } from 'antd/es/layout/layout'
import ContentFooter from './components/ContentFooter'
import Slider from './components/Slider'

function App() {
  const state = useSelector((state) => state.data, shallowEqual)
  const loading = useSelector((state) => state.ui.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <div className='App'>
      <Col className='logo-pokedux'>
        <img src={logoPokedux} alt='Pokedux' />
      </Col>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        className='search-pokemon'
      >
        <Searcher />
      </Col>
      {loading ? (
        <Col className='spin m-w'>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <>
          <Slider />
          <PokemonList
            pokemons={state.isSearch ? state.searchPokemons : state.pokemons}
          />
        </>
      )}
      <Footer span={24}>
        <ContentFooter />
      </Footer>
    </div>
  )
}

export default App
