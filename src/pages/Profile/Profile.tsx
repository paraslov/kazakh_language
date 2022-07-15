import {Link} from 'react-router-dom'
import {ROUTES} from '../../Router/Router'
import {lvlUp, selectLvl, selectStats} from '../../store/reducers/profile-reducer'
import Tilt from 'react-parallax-tilt';

import s from './Profile.module.scss'
import {useAppDispatch, useAppSelector} from '../../store/appHooks'
import {Stat} from './components/Stat'
import shemira from '../../assets/images/shemira.jpg'
import React, {useState} from 'react'


export const Profile = () => {
  const dispatch = useAppDispatch()

  const stats = useAppSelector(selectStats)
  const heroLvl = useAppSelector(selectLvl)

  const [editStats, setEditStats] = useState(false);

  const addLvl = () => {
    dispatch(lvlUp())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <div className={s.infoSection}>
          <header>
            <Tilt>
              <img src={shemira} alt="profile avatar" className={s.avatar}/>
            </Tilt>
            <h3>JoyMe's profile</h3>
            <div className={s.level}>
              <h4>{heroLvl.name}: {heroLvl.statValue}</h4>
              {editStats ? <button onClick={addLvl}>LvL Up!</button> : null}
            </div>
          </header>
          <div className={s.heroStats}>
            <h3>Hero stats</h3>
            <div>Health: 2000</div>
            <div>Magic dmg: 2000</div>
            <div>Physical dmg: 2000</div>
            <div>Magic dmg: 2000</div>
            <div>Physical dmg: 2000</div>

          </div>
        </div>
        <div>
          <button onClick={() => setEditStats(!editStats)}>{editStats ? 'Finish edit' : 'Edit chars'}</button>
        </div>
        <div className={s.characteristics}>
          {stats.map((stat: any) => <Stat key={stat.id} stat={stat} editStats={editStats}/>)}
        </div>
      </div>
      <Link to={ROUTES.MAIN} className={s.link}>
        Back to main
      </Link>
    </div>
  )
}
