import React from "react";

function MainTitle({ title }) {
  return (
    <div className="relative py-8 animate group w-full mb-24">
      <hr className="absolute bottom-0 left-0 w-[100%] border border-neutral-500 animate group-hover:-translate-y-2" />
      {/* <hr className="absolute top-0 -left-8 w-[20%] border border-neutral-500 animate  group-hover:translate-x-12" /> */}
      <h3 className="text-white text-3xl md:text-6xl text-center">{title}</h3>
    </div>
  );
}

export default MainTitle;
