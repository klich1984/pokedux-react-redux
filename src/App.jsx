// import { useEffect, useState } from 'react'
import './App.css'

import { Col } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logoPokedux from './assets/logoPokedux.svg'
// import { getPokemons } from './api'
import { useFetch } from './hooks/useFetch'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=50'

function App() {
  const { pokemons, isPending } = useFetch(URL)
  console.log('🚀 ~ file: App.jsx:15 ~ App ~ pokemons:', { pokemons, isPending })
  // const [pokemons, setPokemons] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getPokemons()
  //     setPokemons(data)
  //     console.log('🚀 ~ file: App.jsx:18 ~ useEffect ~ data:', data)
  //   }

  //   getData()
  // }, [])
  if (!isPending) {
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
}

export default App
