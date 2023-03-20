import React from 'react'
import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const { Meta } = Card

const PokemonCard = ({ name, avatar }) => {
  return (
    <>
      <Card
        style={{ width: 240 }}
        title={name}
        extra={<StarOutlined />}
        cover={
          <img
            // src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'
            src={avatar}
            alt='Ditto'
          />
        }
      >
        <Meta description='fire magic' title='Pokemon' />
      </Card>
    </>
  )
}

export default PokemonCard
