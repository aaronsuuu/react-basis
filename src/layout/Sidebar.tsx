import { routes } from '../router/index.tsx'

function Sidebar() {
  return (
    <aside className="bg-surface lg:w-1/5 md:w-1/6 p-4 hidden md:block">
      <ul>
        {routes.map(({ path, name }, index) => (
          <li key={index} className="px-2 py-1 font-bold text-lg divide-y-2 text-primary">
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
