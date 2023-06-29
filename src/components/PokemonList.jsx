import { shallowEqual, useSelector } from 'react-redux'
import PokemonCard from './Card'
import NoMatch from './NoMatch'

const PokemonList = ({ pokemons }) => {
  const search = useSelector((state) => state.search, shallowEqual)

  if (search.noMatchSearch) return <NoMatch />

  return (
    <div className='pokemonList m-w'>
      {pokemons?.map((pokemon) => (
        <div key={`card-${pokemon.id}`} className='pokemonList__card--father'>
          <div className={`pokemonList__card`}>
            <PokemonCard
              name={pokemon.name}
              avatar={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types}
              id={pokemon.id}
              favorite={pokemon.favorite}
              abilities={pokemon.abilities}
              stats={pokemon.stats}
              experience={pokemon.base_experience}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList
