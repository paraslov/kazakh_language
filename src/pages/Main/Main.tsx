import shemira from '../../assets/images/shemira.jpg'
import React from 'react'
import {Link} from 'react-router-dom'
import {ROUTES} from '../../Router/Router'
import Tilt from 'react-parallax-tilt';

export const Main = () => {
  return (
    <div>
      <header className="App-header">
        <Tilt>
          <img src={shemira} alt="logo" className='App-logo' />
        </Tilt>
        <p>
          Ultimate experience management
        </p>
        <Link
          className="App-link"
          to={ROUTES.PROFILE}
        >
          Enter the profile
        </Link>
        <Link
          className="App-link"
          to={ROUTES.KAZAKSHA}
        >
          Learn Kazaksha
        </Link>
      </header>
    </div>
  )
}
