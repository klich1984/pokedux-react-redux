import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getIn } from 'immutable'
import './App.css'

import { Col, Spin } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logoPokedux from './assets/logoPokedux.svg'
import { getPokemons } from './api'
import { getPokemonsWithDetails, setLoading } from './actions'

function App() {
  const pokemons = useSelector((state) =>
    getIn(state, ['data', 'pokemons'], shallowEqual)
  ).toJS()
  const dispatch = useDispatch()
  const loading = useSelector((state) => getIn(state, ['ui', 'loading']))

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true))
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
