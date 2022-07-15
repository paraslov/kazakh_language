import {Navigate, Route, Routes} from 'react-router-dom'
import {Main} from '../pages/Main/Main'
import {Profile} from '../pages/Profile/Profile'
import {Kazaksha} from '../pages/Kazaksha/Kazaksha'

export const ROUTES = {
  ROOT: '/',
  MAIN: '/main',
  PROFILE: '/profile',
  KAZAKSHA: '/kazaksha'
}

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Navigate replace to={ROUTES.MAIN} />}/>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.PROFILE} element={<Profile />}/>
        <Route path={ROUTES.KAZAKSHA} element={<Kazaksha />}/>
      </Routes>
    </div>
  )
}
