import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  const [page, setPage] = useState<'home' | 'projects'>('home')

  return page === 'home'
    ? <Home onNavigateProjects={() => setPage('projects')} />
    : <Projects onBack={() => setPage('home')} />
}
