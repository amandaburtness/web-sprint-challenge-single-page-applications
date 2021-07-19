import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const Home = () => {

  const { url } = useRouteMatch()

  return (
    <div className = "home-container">
        <h1>Care for some Pizza? Me too.</h1>
        <Link to={`${url}pizza`}><button id = "redirect">Pizza?</button></Link>
    </div>
  )
}

export default Home