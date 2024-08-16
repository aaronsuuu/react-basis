import Home from '@/pages/Home'
import UseCallback from '@/pages/UseCallback'
import UseContext from '@/pages/UseContext'
import UseEffect from '@/pages/UseEffect'
import UseImperativeHandle from '@/pages/UseImperativeHandle'
import UseLayoutEffect from '@/pages/UseLayoutEffect'
import UseMemo from '@/pages/UseMemo'
import UseReducer from '@/pages/UseReducer'
import UseRef from '@/pages/UseRef'
import UseState from '@/pages/UseState'
import { createBrowserRouter } from 'react-router-dom'

export const routes = [
  { path: '/', element: <Home />, name: 'Home' },
  { path: '/use-state', element: <UseState />, name: 'useState' },
  { path: '/use-effect', element: <UseEffect />, name: 'useEffect' },
  { path: '/use-reducer', element: <UseReducer />, name: 'useReducer' },
  { path: '/use-context', element: <UseContext />, name: 'useContext' },
  { path: '/use-memo', element: <UseMemo />, name: 'useMemo' },
  { path: '/use-callback', element: <UseCallback />, name: 'useCallback' },
  { path: '/use-ref', element: <UseRef />, name: 'useRef' },
  { path: '/use-layout-effect', element: <UseLayoutEffect />, name: 'useLayoutEffect' },
  { path: '/use-imperative-handle', element: <UseImperativeHandle />, name: 'useImperativeHandle' },
]
export const router = createBrowserRouter(routes.map((el) => ({ path: el.path, element: el.element })))
