import React from 'react'
import Women from './Women'
import { useParams } from 'react-router-dom'

const Item = () => {
  const {item } = useParams()
  
  return (
    <div>
      <Women/>
    <p>{item}</p>
    </div>
  )
}

export default Item