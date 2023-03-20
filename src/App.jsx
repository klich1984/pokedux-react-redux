import { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'

import { Col } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logoPokedux from './assets/logoPokedux.svg'
import { getPokemons } from './api'
import { setPokemons as setPokemonsActions } from './actions'

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const getData = async () => {
      const data = await getPokemons()
      setPokemons(data)
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
