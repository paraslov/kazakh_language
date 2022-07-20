import {Navigate, Route, Routes} from 'react-router-dom'
import {Main} from '../pages/Main/Main'
import {Kazaksha} from '../pages/Kazaksha/Kazaksha'
import {Categories} from '../pages/Categories/Categories'

export const ROUTES = {
  ROOT: '/',
  MAIN: '/main',
  CATEGORIES: '/categories',
  KAZAKSHA: '/kazaksha',
}

export const PARAMS = {
  CATEGORY: ':category',
}

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Navigate replace to={ROUTES.MAIN} />}/>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.CATEGORIES} element={<Categories />}/>
        <Route path={ROUTES.KAZAKSHA} >
          <Route path={PARAMS.CATEGORY} element={<Kazaksha />} />
        </Route>
      </Routes>
    </div>
  )
}
