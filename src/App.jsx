import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Hobby from './pages/Hobby'
import HobbyDetail from './pages/HobbyDetail'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/hobby/:id" element={<HobbyDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
