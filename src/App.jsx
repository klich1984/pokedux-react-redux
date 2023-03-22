import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import { Col } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logoPokedux from './assets/logoPokedux.svg'
import { getPokemons } from './api'
import { getPokemonsWithDetails } from './actions'

function App() {
  const pokemons = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const pokemonsRes = await getPokemons()
      dispatch(getPokemonsWithDetails(pokemonsRes))
    }

    getData()
  }, [])

  return (
    <div className='App'>
      <Col span={10} offset={7} className='logo-pokedux'>
        <img src={logoPokedux} alt='Pokedux' />
      </Col>
      <Col span={10} offset={7}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
