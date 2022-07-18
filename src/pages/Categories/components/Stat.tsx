import React from 'react'
import {useAppDispatch} from '../../../store/appHooks'

import s from '../Categories.module.scss'

type TStatProps = {
  stat: any;
  editStats: boolean
}

export const Stat: React.FC<TStatProps> = ({stat, editStats}) => {
  const {statValue, name, id} = stat
  const dispatch = useAppDispatch()

  return (
    <div className={s.stat__wrapper}>
      <div className={s.stat}>
        <span>{name}: </span>
        <span className={s.stat__entities}>{statValue}</span>
      </div>
      {editStats
        ? <div className={s.edit}>
            <button className={s.edit__entities} onClick={() => {}}>+1</button>
            <button className={s.edit__entities} onClick={() => {}}>+10</button>
          </div>
        : null}
    </div>
  )
}
