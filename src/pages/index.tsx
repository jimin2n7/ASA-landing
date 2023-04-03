import { Route, Routes } from 'react-router-dom'
import { ROUTERS } from '~/constants/router'
import Notfound from '~/pages/404'
import HomeScreen from './Home'
const MainView = () => {
  return (
    <Routes>
      <Route path={ROUTERS.HOME} element={<HomeScreen />}></Route>
      <Route path={ROUTERS.NOT_FOUND} element={<Notfound />}></Route>
    </Routes>
  )
}

export default MainView
