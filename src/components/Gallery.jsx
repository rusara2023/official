import React from "react";
import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-1.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-5.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-2.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-3.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-4.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-6.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-7.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-8.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-9.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-10.jpg",
    caption: "",
  },
  {
    src: "https://ruusara.github.io/ruusara/assets/imgs/gallary-11.jpg",
    caption: "",
  },

];

function MyGallery() {
  return (
    <div className="py-12 mx-auto">
      <Gallery images={images} enableImageSelection={false} rowHeight={420} className="justify-center" />
    </div>
  );
}

export default MyGallery;
