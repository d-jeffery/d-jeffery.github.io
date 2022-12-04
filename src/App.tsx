import React from 'react'

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import Games from './components/Games'
import Miniatures from './components/Miniatures'

import 'reset-css'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <h1>Daniel Jeffery</h1>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/miniatures">Miniatures</NavLink>
          </nav>
        </header>
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/games" element={<Games />} />
            <Route path="/miniatures" element={<Miniatures />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default App
