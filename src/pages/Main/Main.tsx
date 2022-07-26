import kazakh from '../../assets/images/kazakh.jpg'
import React from 'react'
import {Link} from 'react-router-dom'
import {ROUTES} from '../../Router/Router'
import Tilt from 'react-parallax-tilt'

export const Main = () => {
  return (
    <div>
      <header className="App-header">
        <div className="App-header__main">
          <Tilt>
          <img src={kazakh} alt="logo" className='App-logo'/>
        </Tilt>
          <p>
            Improve your Kazakh language skills (v .012)
          </p>
          <Link
            className="App-link"
            to={ROUTES.KAZAKSHA + '/main'}
          >
            Learn Kazaksha
          </Link>
          <Link
            className="App-link"
            to={ROUTES.CATEGORIES}
          >
            Learn by Categories
          </Link>
        </div>
        <footer className='App-footer'>
          2022 {'\u00A9'} inspired by Gulmira Amandykova.
          <br/>
          If you have a suggestions or found an error you can send me an email: <b>tsfoe@mail.ru</b>
        </footer>
      </header>
    </div>
  )
}
