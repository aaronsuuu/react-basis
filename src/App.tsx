import Main from './layout/Main.tsx'
import Sidebar from './layout/Sidebar.tsx'

function App() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
