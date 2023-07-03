import React from "react";
import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FWhatsApp%20Image%202023-07-01%20at%2019.40.32.jpg?alt=media&token=75d998a0-0e29-4085-a066-b05689ff9cf2",
    caption: "",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/webi-f2254.appspot.com/o/ruusara%2FWhatsApp%20Image%202023-07-01%20at%2019.40.33.jpg?alt=media&token=7ef73ee2-38e5-4447-bc21-b4e24a4fe102",
    caption: "",
  }

];

function MyGallery() {
  return (
    <div className="py-12 mx-auto">
      <Gallery images={images} enableImageSelection={false} rowHeight={420} className="justify-center" />
    </div>
  );
}

export default MyGallery;
