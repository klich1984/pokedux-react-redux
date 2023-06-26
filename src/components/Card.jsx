import React, { useEffect, useRef } from 'react'

import { Card, notification } from 'antd'
import ButtonStart from './ButtonStart.jsx'
import CardBack from './CardBack.jsx'
import PokemonType from './PokemonType.jsx'
import useFavorite from '../hooks/useFavorite.js'

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
  const cardRef = useRef(null)
  const [api, contextHolder] = notification.useNotification()
  const { handleFavorite: addRemoveFavorite } = useFavorite()

  const handleFavorite = (favorite) => {
    const msgFavorite = addRemoveFavorite(favorite, id, name)

    api[msgFavorite.type](msgFavorite.content)
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
      {contextHolder}
      <div className={`pokemonList__card--front`}>
        <Card
          ref={cardRef}
          style={{ width: 240 }}
          title={name}
          extra={
            <ButtonStart isFavorite={favorite} onClick={() => handleFavorite(favorite)} />
          }
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
