import Home from '@/pages/Home'
import UseEffect from '@/pages/UseEffect'
import UseReducer from '@/pages/UseReducer'
import UseState from '@/pages/UseState'
import { createBrowserRouter } from 'react-router-dom'

export const routes = [
  { path: '/', element: <Home />, name: 'Home' },
  { path: '/use-state', element: <UseState />, name: 'useState' },
  { path: '/use-effect', element: <UseEffect />, name: 'useEffect' },
  { path: '/use-reducer', element: <UseReducer />, name: 'useReducer' },
]
export const router = createBrowserRouter(routes.map((el) => ({ path: el.path, element: el.element })))
