import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="relative py-8 animate group">
      <hr className="absolute bottom-0 left-8 w-[80%] border border-neutral-500 animate group-hover:-translate-x-12" />
      <hr className="absolute top-0 -left-8 w-[20%] border border-neutral-500 animate  group-hover:translate-x-12" />
      <h3 className="text-white text-3xl md:text-5xl">{title}</h3>
    </div>
  );
}

export default SectionTitle;
