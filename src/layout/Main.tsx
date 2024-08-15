import { router } from '@router/index'
import { RouterProvider } from 'react-router-dom'

function Main() {
  return (
    <main className="flex-1">
      <nav className="bg-primary flex flex-row justify-between p-4">
        <div className="text-xl font-bold">Learn React for Yourself</div>
        <div className="space-x-4"></div>
      </nav>
      <RouterProvider router={router} />
    </main>
  )
}

export default Main
