import PokemonCard from './Card'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='pokemonList'>
      {pokemons?.map((pokemon, index) => (
        <PokemonCard
          key={`card-${index}`}
          name={pokemon.name}
          avatar={pokemon.sprites.other.dream_world.front_default}
          types={pokemon.types}
        />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList
