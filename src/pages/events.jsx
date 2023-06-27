import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG1 from "../images/home_1.png";
import IMG2 from "../images/home_2.png";
import E1 from "../images/e1.png";
import E2 from "../images/e2.png";
import E3 from "../images/e3.png";
import C1 from "../images/c1.png";
import C2 from "../images/c2.png";
import MainTitle from "../components/Title";
import { Link } from "gatsby";
import MyGallery from "../components/Gallery";
import { AppContext } from "../context/context";

const IndexPage = () => {
  return (
    <AppContext.Consumer>
      {({ isEng, handleLan }) => (
        <HomeLayout>
          <main className="">
            <MainTitle title="Upcoming Events" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <Link to='/dubbing-competition' className="w-full relative overflow-hidden group animate">
                <img src={E1} alt="Dubbing Competition" className="w-full" />
                <div className="bg-black bg-opacity-75 w-full absolute -bottom-20 left-0 h-56 animate group-hover:-translate-y-12 p-4 pt-12">
                  <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                    {isEng ? "Dubbing Competition" : "හඬ කැවීමේ තරඟාවලිය"}
                  </h4>
                </div>
              </Link>
              <Link to="/photo-manipulation-competition" className="w-full relative overflow-hidden group animate">
                <img src={E2} alt="Photo Manipulation Competition" className="w-full" />
                <div className="bg-black bg-opacity-75 w-full absolute -bottom-20 left-0 h-56 animate group-hover:-translate-y-12 p-4 pt-12">
                  <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                    {isEng ? "Photo Manipulation Competition" : "ඡායාරූප සැකසීම් තරඟාවලිය"}
                  </h4>
                </div>
              </Link>
              <Link to="/comic-character-design-competition" className="w-full relative overflow-hidden group animate">
                <img src={E3} alt="Comic Character Design Competition" className="w-full" />
                <div className="bg-black bg-opacity-75 w-full absolute -bottom-20 left-0 h-56 animate group-hover:-translate-y-12 p-4 pt-12">
                  <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                    {isEng ? "Comic Character Design Competition" : "ඩිජිටල් චරිත සිතුවම් නිර්මාණ තරඟාවලිය"}
                  </h4>
                </div>
              </Link>
            </div>
          </main>
        </HomeLayout>
      )}
    </AppContext.Consumer>
  );
};

export default IndexPage;
