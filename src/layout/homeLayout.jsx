import React from "react";
import NavBar from "./topnav";

function homeLayout({ children }) {
  return <div  style={{backgroundColor:'#0D0D0D'}} className="bg-dark w-screen h-screen overflow-hidden scroll-auto bg-gray-800">
    <NavBar/>
    {children}
    </div>;
}

export default homeLayout;
