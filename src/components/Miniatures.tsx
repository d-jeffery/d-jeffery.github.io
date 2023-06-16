import React from 'react'

import './Miniatures.css'
import { Link } from "react-router-dom";
// import { InstagramEmbed } from 'react-social-media-embed';
//
// const instaPosts = [
//   "https://www.instagram.com/p/B9uv4YanRNy/",
//   "https://www.instagram.com/p/B1DbHKzFTsQ/",
//   "https://www.instagram.com/p/CB81DUDnwlJ/",
//   "https://www.instagram.com/p/CRxgd1wndgp/",
//   "https://www.instagram.com/p/CWjmImttYIb/",
//   "https://www.instagram.com/p/CYF2AOtLX_b/",
//
//
//   "https://www.instagram.com/p/CaLk49flIXU/",
//   "https://www.instagram.com/p/CbTXTR_PUIg/",
//   "https://www.instagram.com/p/CqwB4aXv3ew/",
//   "https://www.instagram.com/p/CmpNA3cv-05/"
// ]
//
//   <section>
//   {
//     instaPosts.map((p, i) =>
//       <div key={i} style={{ display: 'flex', justifyContent: 'center', maxWidth: 328}}>
//         <InstagramEmbed url={p} width={328} />
//       </div>)
//   }
//
// </section>


function Miniatures(): React.ReactElement {
  return (
    <div className="minis">
      <h2>Miniatures</h2>
      <p>Collection of some of my favourite pieces I&apos;ve painted.</p>
      <p><Link to="https://www.instagram.com/dan.the.miniature.man/" target="_blank">Find more at my instagram</Link></p>



    </div>
  );
}

export default Miniatures
