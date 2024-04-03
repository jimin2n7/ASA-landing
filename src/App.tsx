import { Suspense } from 'react'
import MainView from '~/pages'
import { BrowserRouter } from 'react-router-dom'
import { store } from '~/store'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import { ScrollTop } from './components/ScrollToTop'

function App() {
  return (
    // <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Navbar />
        <MainView />
        <ScrollTop />
      </BrowserRouter>
    </Suspense>
    // </Provider>
  )
}

export default App
