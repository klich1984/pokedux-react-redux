import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const Searcher = () => {
  return (
    <>
      <Search placeholder='buscar pokemon...' enterButton />
    </>
  )
}

export default Searcher
