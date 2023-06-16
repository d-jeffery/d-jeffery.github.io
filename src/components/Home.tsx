import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

function Home(): React.ReactElement {
  return (
    <div className="home">
      <h2>
        Hello, World!
        <br />
        I&apos;m Daniel Jeffery
      </h2>
      <section className="intro">
        <ul>
          <li>
            <Link to="/resume">Professional Programmer</Link>
          </li>
          <li>
            <Link to="/games">Hobby Game Developer</Link>
          </li>
          <li>
            <Link to="/miniatures">Amateur Mini Painter</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home




