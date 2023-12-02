import React from 'react'
import { Link } from 'react-router-dom'
import Women from './Women'

const Hero = () => {
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to={'/'} >Home</Link> </li>
          <li> <Link to={'/women'} >Women</Link> </li>
        </ul>
      </nav>
      {window.location.href === '/' && <div>Index</div>}
      {window.location.href ==='/women' && <Women/>}
    </div>
  )
}

export default Hero