import React from 'react'
import { useDispatch } from 'react-redux'

import { Card } from 'antd'
import ButtonStart from './ButtonStart.jsx'
import { setFavorite } from '../actions/index.js'

const { Meta } = Card

const PokemonCard = ({ name, avatar, types, id, favorite }) => {
  const dispatch = useDispatch()

  let allTypes = types.map((item) => item.type.name)
  allTypes = allTypes.join(', ')

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  return (
    <>
      <Card
        style={{ width: 240 }}
        title={name}
        extra={<ButtonStart isFavorite={favorite} onClick={handleFavorite} />}
        cover={<img src={avatar} alt={name} />}
      >
        <Meta description={allTypes} title='Pokemon' />
      </Card>
    </>
  )
}

export default PokemonCard
