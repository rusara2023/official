import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

function HomeLayout({ children }) {
  return (
    <div className="bg-neutral-950 w-screen h-screen overflow-hidden overflow-y-auto">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
