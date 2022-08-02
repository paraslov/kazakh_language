import s from './Kazaksha.module.scss'

import {useAppSelector} from '../../store/appHooks'
import {selectTranslates, TCardType} from '../../store/reducers/kazaksha-reducer'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export const Kazaksha = () => {
  const translates = useAppSelector(selectTranslates)
  const navigate = useNavigate()
  const { category } = useParams();
  console.log('@> category: ', category)

  const getRandomCards = (cards: TCardType[]) => {
    const randomCardsArr: TCardType[] = []

    while (randomCardsArr.length < 4) {
      const randomIndex = Math.floor(Math.random() * cards.length)
      if (!randomCardsArr.some(c => c.id === randomIndex)) {
        const newCard = cards[randomIndex]
        randomCardsArr.push(newCard)
      }
    }

    return randomCardsArr
  }

  const [randomCards, setRandomCards] = useState(getRandomCards(translates))
  const [showTranslates, setShowTranslates] = useState(false)

  const onControlBtnClick = () => {
    if (showTranslates) {
      setShowTranslates(false)
      setRandomCards(getRandomCards(translates))
    } else {
      setShowTranslates(true)
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.translates}>
        {randomCards.map((t) =>
          <div key={t.id} className={s.translate}>
            <div className={s.translateHeader}>{t.kazakh}</div>
            <div className={s.translateItems}>
              <div className={s.translateItem}>{showTranslates ? t.rus : '...'}</div>
              <div className={s.translateItem}><b>Пример</b>: {t.example}</div>
              <div className={s.translateItem}><b>Перевод</b>: {showTranslates ? t.exampleTranslate : '...'}</div>
            </div>
          </div>)}
      </div>
      <div>
        <button className={`${s.button} ${showTranslates ? s.next : ''}`} onClick={onControlBtnClick}>
          {showTranslates ? 'Следущие' : 'Показать перевод'}
        </button>
      </div>
      <div>
        <button className={`${s.button} ${s.back}`} onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </div>
  )
}
