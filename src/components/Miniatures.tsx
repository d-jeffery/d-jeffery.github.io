import React from 'react'
import ImageGallery from 'react-image-gallery'

import './Miniatures.css'
import "react-image-gallery/styles/css/image-gallery.css";

const photos = [
  { original: "/miniatures/IMG_20190807_185631.jpg" },
  { original: "/miniatures/IMG_20190811_230607.jpg" },
  { original: "/miniatures/IMG_20200627_121913.jpg" },
  { original: "/miniatures/IMG_20211229_185454.jpg" },
  { original: "/miniatures/IMG_20221225_151530.jpg" },
  { original: "/miniatures/PXL_20210726_021206739.jpg" },
  { original: "/miniatures/PXL_20211121_231825165.jpg" },
  { original: "/miniatures/PXL_20220530_032105733.jpg" },
  { original: "/miniatures/PXL_20230331_190708210.jpg" },
  { original: "/miniatures/PXL_20230407_213756024.jpg" },
  { original: "/miniatures/PXL_20230614_053856484.jpg" },
  { original: "/miniatures/PXL_20230616_032640169.jpg" },
]

function Miniatures(): React.ReactElement {
  return (
    <div className="minis">
      <h2>Miniatures</h2>
      <p>Collection of some of my favourite pieces I&apos;ve painted.</p>
      <p><a href="https://www.instagram.com/dan.the.miniature.man/" target="_blank" rel="noreferrer">Find more at my instagram</a></p>
      <ImageGallery items={photos} />
    </div>
  );
}

export default Miniatures
