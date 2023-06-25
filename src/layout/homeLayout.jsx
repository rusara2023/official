import React from "react";
import TopNav from "./TopNav";

function HomeLayout({ children }) {
  return (
    <div className="bg-neutral-950 w-screen h-screen overflow-hidden overflow-y-auto">
      <TopNav />

      {children}
    
    </div>
  );
}

export default HomeLayout;
