import React from "react";
import { Gallery } from "react-grid-gallery";
import SectionTitle from "./SectionTitle";


const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FIMG-20230703-WA0027.jpg?alt=media&token=f3c9aade-8600-4862-9273-c03c88bea2fb",
    caption: "",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FIMG-20230703-WA0028.jpg?alt=media&token=61328e33-74af-4796-93bf-f89bda8314ed",
    caption: "",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FScreenshot%202023-07-03%20212923.png?alt=media&token=b24e539d-9349-4b08-9d15-87522c89fdaa",
    caption: "",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FIMG-20230703-WA0026.jpg?alt=media&token=62136071-945b-4224-a379-63e12db8666b",
    caption: "",
  }

];

function Gallery2022() {
  return (
    <div className="py-12 mx-auto">
      <SectionTitle title="Winners of 2022" />
      <br/>
      <Gallery images={images} enableImageSelection={false} rowHeight={420} className="justify-center" />
    </div>
  );
}

export default Gallery2022;
