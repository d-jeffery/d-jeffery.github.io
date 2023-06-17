import React from 'react'

import './Games.css'
import { Link } from "react-router-dom";

const games = [
  {
    title: "Achluophobia by Sloth-like Man",
    url: "https://itch.io/embed/1971497?link_color=673ab7",
    link: "https://slothlikeman.itch.io/achluophobia-js13k2013",
  },
  {
    title: "Double Vision by Sloth-like Man",
    url: "https://itch.io/embed/1971535?link_color=673ab7",
    link: "https://slothlikeman.itch.io/double-vision-js13k2016",
  },
  {
    title: "Twisted Tunnels by Sloth-like Man",
    url: "https://itch.io/embed/259890?link_color=673ab7",
    link: "https://slothlikeman.itch.io/twisted-tunnels",
  },
  {
    title: "Dig Down by Sloth-like Man",
    url: "https://itch.io/embed/338280?link_color=673ab7",
    link: "https://slothlikeman.itch.io/dig-down",
  },
  {
    title: "Necrotic Commander by Sloth-like Man",
    url: "https://itch.io/embed/1924124?link_color=673ab7",
    link: "https://slothlikeman.itch.io/necrotic-commander-js13k2022",
  },
]

function Games(): React.ReactElement {
  return (
    <div className="games">
      <h2>Games</h2>
      <p>Collection of some games I&apos;ve made.</p>
      <p><a href="https://slothlikeman.itch.io/" target="_blank" rel="noreferrer">You can find them all here @ my itch.io page</a></p>
      {
        games.map((p, i) =>
          <div key={i}>
            <iframe src={p.url} style={{width: "100%", height: "100%"}}>
              <Link to={p.link} target="_blank">{p.title}</Link>
            </iframe>
          </div>)
      }
    </div>
  )
}

export default Games
