import React from "react";
import { AppContext } from "../context/context";
import SectionTitle from "./SectionTitle";
import J1 from "../images/j1.jpg";
import J2 from "../images/j2.jpg";
import J3 from "../images/j3.jpg";
import J4 from "../images/j4.jpg";

function Judges() {
  return (
    <AppContext.Consumer>
      {({ isEng }) => (
        <main>
          <SectionTitle title={isEng ? "Judge Board" : "විනිශ්චය මණ්ඩලය"} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="w-full relative group animate">
              <img src={J1} alt="Dubbing Competition" className="object-cover w-full rounded-full aspect-square animate group-hover:scale-110" />
              <div className="w-full animate group-hover: p-4 ">
                <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                  Mr.Isuru Hathurusinghe
                  {/* {isEng ? "Mr.Isuru Hathurusinghe" : "ඉසුරු සුබසිංහ"} */}
                </h4>
                <p className="text-center text-lg text-gray-600 animate group-hover:scale-105">
                  {isEng ? "Character Design Competition" : "ඩිජිටල් චරිත සිතුවම් නිර්මාණ තරඟාවලිය"}
                </p>
              </div>
            </div>
            <div className="w-full relative group animate">
              <img src={J2} alt="Dubbing Competition" className="object-cover w-full rounded-full aspect-square animate group-hover:scale-110" />
              <div className="w-full animate group-hover: p-4 ">
                <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                  Mr. S.G. Fernandez
                  {/* {isEng ? "Mr. S.G. Fernandez" : "S.G. ෆනෑන්ඩස්"} */}
                </h4>
                <p className="text-center text-lg text-gray-600 animate group-hover:scale-105">
                  {isEng ? "Photo Manipulation Competition" : "ඡායාරූප සැකසීම් තරඟාවලිය"}
                </p>
              </div>
            </div>
            <div className="w-full relative group animate">
              <img src={J3} alt="Dubbing Competition" className="object-cover w-full rounded-full aspect-square animate group-hover:scale-110" />
              <div className="w-full animate group-hover: p-4 ">
                <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                  Mr.Pasan Ranaweera
                  {/* {isEng ? "Mr.Pasan Ranaweera" : "පසන් රණවීර"} */}
                </h4>
                <p className="text-center text-lg text-gray-600 animate group-hover:scale-105">{isEng ? "Dubbing Competition" : "හඬ කැවීමේ තරඟාවලිය"}</p>
              </div>
            </div>
            <div className="w-full relative group animate">
              <img src={J4} alt="Dubbing Competition" className="object-cover w-full rounded-full aspect-square animate group-hover:scale-110" />
              <div className="w-full animate group-hover: p-4 ">
                <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                  Mr.Ishara Wicramasinghe
                  {/* {isEng ? "Mr.Ishara Wicramasinghe" : "ඉශාර වික්‍රමසිංහ"} */}
                </h4>
                <p className="text-center text-lg text-gray-600 animate group-hover:scale-105">{isEng ? "Dubbing Competition" : "හඬ කැවීමේ තරඟාවලිය"}</p>
              </div>
            </div>
          </div>
        </main>
      )}
    </AppContext.Consumer>
  );
}

export default Judges;
