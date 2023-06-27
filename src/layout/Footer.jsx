import React from "react";
import UOP from "../images/uop.png";
import { AppContext } from "../context/context";

function Footer() {
  return (
    <AppContext.Consumer>
      {({ isEng }) => (
        <main className="py-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <img src={UOP} alt="" className="w-full aspect-square object-scale-down object-center" />
          <div className="text-white lg:col-span-2">
            <h6 className="text-3xl">{isEng ? "LITERRARY SUBCOMMITTEE OF UNIVERSITY OF PERADENIYA" : "සාහිත්‍ය අනුකමිටුව"}</h6>
            <p className="text-lg">
              {isEng ? " “Let my country be awake”, The Students’ Festival of Literature - 2023" : `"මාගේ දේශය අවදි කරනු මැන" ශිෂ්‍ය සාහිත්‍ය උළෙල - 2022`}
              <br />
              {isEng?"Peradeniya Students’ Union, Literary Subcommittee of":"මහා ශිෂ්‍ය සංගමය, සාහිත්‍ය අනුකමිටුව,"}
              <br />
             {isEng?"University of Peradeniya":"පේරාදෙණිය විශ්ව විද්‍යාලය"}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 text-white">
            <h6 className="text-lg">REACH US</h6>
            <p className="font-round">Email : ruusara2023@gmail.com</p>
            <p className="font-round">Mobile : 07XXXXXXXX</p>
          </div>
        </main>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
