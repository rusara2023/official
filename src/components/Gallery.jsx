import React from 'react'
import { Gallery } from "react-grid-gallery";

const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
  
 
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       
    },
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       
       alt: "Boats (Jeshu John - designerspics.com)",
    },
 
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       
    },
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       
       caption: "After Rain (Jeshu John - designerspics.com)",
    },

 ];

function MyGallery() {
  return (
    <div className='py-12 mx-auto'>
        <Gallery images={images} enableImageSelection={false} rowHeight={240}/>
    </div>
  )
}

export default MyGallery