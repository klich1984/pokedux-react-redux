import React from 'react'

const PokemonType = ({ types, id }) => {
  return (
    <div className='card__front--types'>
      {types?.map((type, index) => {
        return (
          <div key={`types-${id}-${index}`}>
            <img src={`assets/${type?.type?.name}.png`} alt={type?.type?.name} />
            <p>{type?.type?.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonType
