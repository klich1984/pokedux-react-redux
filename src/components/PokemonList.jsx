import PokemonCard from './Card'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='pokemonList'>
      {pokemons?.map((pokemon, index) => (
        <PokemonCard key={`card-${index}`} name={pokemon.name} />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList
