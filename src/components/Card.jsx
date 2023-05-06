import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { Card } from 'antd'
import ButtonStart from './ButtonStart.jsx'
import { setFavorite } from '../slices/dataSlice.js'
import CardBack from './CardBack.jsx'
import PokemonType from './PokemonType.jsx'

const { Meta } = Card

const PokemonCard = ({
  name,
  avatar,
  types,
  id,
  favorite,
  abilities,
  stats,
  experience,
}) => {
  const dispatch = useDispatch()
  const cardRef = useRef(null)

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  const handleClick = () => {
    cardRef.current.parentElement.parentElement.classList.add(
      'pokemonList__card--father--click'
    )
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        cardRef.current.parentElement.parentElement.classList.remove(
          'pokemonList__card--father--click'
        )
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className={`pokemonList__card--front`}>
        <Card
          ref={cardRef}
          style={{ width: 240 }}
          title={name}
          extra={<ButtonStart isFavorite={favorite} onClick={handleFavorite} />}
          cover={<img src={avatar} alt={name} />}
          onClick={handleClick}
        >
          <Meta description={<PokemonType types={types} id={id} />} />
        </Card>
      </div>
      <div className='pokemonList__card--back'>
        <CardBack abilities={abilities} experience={experience} stats={stats} id={id} />
      </div>
    </>
  )
}

export default PokemonCard
