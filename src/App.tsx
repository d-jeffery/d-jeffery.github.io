import React from 'react'

import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import Resume from './components/Resume'
import Games from './components/Games'
import Miniatures from './components/Miniatures'

import 'reset-css'
import './App.css'

function App(): React.ReactElement {
  return (
    <div className="App">
      <HashRouter>
        <header className="header">
          <nav>
            <NavLink to="/">Resume</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/miniatures">Miniatures</NavLink>
          </nav>
        </header>
        <section className="content">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/games" element={<Games />} />
            <Route path="/miniatures" element={<Miniatures />} />
          </Routes>
        </section>
      </HashRouter>
    </div>
  )
}

export default App
