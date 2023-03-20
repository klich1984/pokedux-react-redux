import PokemonCard from './Card'

const PokemonList = ({ pokemons }) => {
  console.log('🚀 ~ file: PokemonList.jsx:4 ~ PokemonList ~ pokemons:', pokemons)
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
