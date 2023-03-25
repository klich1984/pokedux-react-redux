import React from 'react'
import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const { Meta } = Card

const PokemonCard = ({ name, avatar, types }) => {
  let allTypes = types.map((item) => item.type.name)
  allTypes = allTypes.join(', ')

  return (
    <>
      <Card
        style={{ width: 240 }}
        title={name}
        extra={<StarOutlined />}
        cover={<img src={avatar} alt={name} />}
      >
        <Meta description={allTypes} title='Pokemon' />
      </Card>
    </>
  )
}

export default PokemonCard
