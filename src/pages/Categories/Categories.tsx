import { Link } from 'react-router-dom'
import { ROUTES } from '../../Router/Router'
import Tilt from 'react-parallax-tilt'
import kazakh from '../../assets/images/kazakh.jpg'
import s from './Categories.module.scss'
import React from 'react'
import { CategoriesTypes } from '../../store/reducers/kazaksha-reducer'


export const Categories = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <div className={s.infoSection}>
          <header>
            <Tilt>
              <img src={kazakh} alt="profile avatar" className={s.avatar}/>
            </Tilt>
            <h3>You can learn by a special category</h3>
          </header>
          <div className={s.heroStats}>
            <h3>Pick category you want to improve:</h3>
            <Link className={s.link} to={`${ROUTES.KAZAKSHA}/${CategoriesTypes.MAIN}`}>
              Learn all
            </Link>
            <Link className={s.link} to={`${ROUTES.KAZAKSHA}/${CategoriesTypes.RELATIVES}`}>
              Learn relatives
            </Link>
            <Link className={s.link} to={`${ROUTES.KAZAKSHA}/${CategoriesTypes.COUNT}`}>
              Learn count
            </Link>
            <Link className={s.link} to={`${ROUTES.KAZAKSHA}/${CategoriesTypes.VERBS}`}>
              Learn verbs
            </Link>
          </div>
        </div>
      </div>
      <Link to={ROUTES.MAIN} className={s.link}>
        Back to main
      </Link>
    </div>
  )
}
