import React from 'react'
import {useAppDispatch} from '../../../store/appHooks'
import {incrementStat, TStat} from '../../../store/reducers/profile-reducer'

import s from '../Profile.module.scss'

type TStatProps = {
  stat: TStat
  editStats: boolean
}

export const Stat: React.FC<TStatProps> = ({stat, editStats}) => {
  const {statValue, name, id} = stat
  const dispatch = useAppDispatch()

  const addStat = (add: number) => {
    dispatch(incrementStat({add, id}))
  }

  return (
    <div className={s.stat__wrapper}>
      <div className={s.stat}>
        <span>{name}: </span>
        <span className={s.stat__entities}>{statValue}</span>
      </div>
      {editStats
        ? <div className={s.edit}>
            <button className={s.edit__entities} onClick={() => addStat(1)}>+1</button>
            <button className={s.edit__entities} onClick={() => addStat(10)}>+10</button>
          </div>
        : null}
    </div>
  )
}
