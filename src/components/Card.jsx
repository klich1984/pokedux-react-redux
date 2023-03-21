import React from 'react'
import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const { Meta } = Card

const PokemonCard = ({ name, avatar, abilities }) => {
  let allAbilities = abilities.map((item) =>
    item.is_hidden ? item.ability.name : 'Oculta'
  )
  allAbilities = allAbilities.join(', ')

  return (
    <>
      <Card
        style={{ width: 240 }}
        title={name}
        extra={<StarOutlined />}
        cover={<img src={avatar} alt={name} />}
      >
        <Meta description={allAbilities} title='Pokemon' />
      </Card>
    </>
  )
}

export default PokemonCard
