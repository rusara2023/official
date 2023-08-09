import React from "react";
import { Gallery } from "react-grid-gallery";
import SectionTitle from "./SectionTitle";

const images = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FWhatsApp%20Image%202023-07-03%20at%2022.11.18.jpg?alt=media&token=9f0f104a-4cdd-428e-aea9-6e0d2fe32622",
    caption: "",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FWhatsApp%20Image%202023-07-01%20at%2019.40.33.jpg?alt=media&token=7ef73ee2-38e5-4447-bc21-b4e24a4fe102",
    caption: "",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FWhatsApp%20Image%202023-08-08%20at%2022.23.26.jpg?alt=media&token=c3b825cc-6e19-4486-b8ea-4199f8e9fd77",
    caption: "",
  },
];

function MyGallery() {
  return (
    <div className="py-12 mx-auto">
      <SectionTitle title="Event Posts" />
      <br />
      <Gallery images={images} enableImageSelection={false} rowHeight={420} className="justify-center" />
    </div>
  );
}

export default MyGallery;
