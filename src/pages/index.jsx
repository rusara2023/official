import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG1 from "../images/home_1.png";
import IMG2 from "../images/home_2.png";
import E1 from "../images/e1.png";
import E2 from "../images/e2.png";
import E3 from "../images/e3.png";
import C1 from "../images/c1.png";
import C2 from "../images/c2.png";
import SectionTitle from "../components/SectionTitle";
import { Link } from "gatsby";
import MyGallery from "../components/Gallery";
import { AppContext } from "../context/context";
import Judges from "../components/judges";
const IndexPage = () => {
  return (
    <AppContext.Consumer>
      {({ isEng }) => (
        <HomeLayout>
          <main>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              <div className="z-50 ">
                <h1 className=" text-white text-center md:text-left text-5xl md:text-7xl xl:text-9xl capitalize">
                  {isEng ? "“LET MY COUNTRY AWAKE”" : '"මාගේ දේශය අවදි කරනු මැන"'}
                </h1>
                <h2 className="text-white text-center mt-8 md:text-left text-3xl md:text-5xl xl:text-7xl">
                  {isEng ? "THE STUDENT'S FESTIVAL OF LITERATURE 2023" : "ශිෂ්‍ය සාහිත්‍යය උළෙල 2022"}
                </h2>
              </div>
              <div className="relative h-96 md:h-screen lg:h-auto group animate">
                <div className="absolute w-full h-full top-20 -left-12 bg-neutral-900 opacity-50">
                  <hr className="absolute bottom-8 -left-96 w-[200%] border border-neutral-500 animate group-hover:-translate-x-4" />
                  <hr className="absolute -top-4 -right-96 w-[150%] border border-neutral-500 animate group-hover:translate-x-4" />
                  <hr className="absolute -top-4 -right-96 rotate-90 w-[100%] border border-neutral-500 animate group-hover:-translate-y-4" />
                  <hr className="absolute bottom-48 -left-48 rotate-90 w-[75%] border border-neutral-500 animate group-hover:translate-y-4" />
                </div>
                <img src={IMG1} alt="Ruusara 2023" className="w-full absolute bottom-0 right-0 animate group-hover:scale-110" />
              </div>
            </section>
            <section className="mt-48">
              <SectionTitle title={"About Us"} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full py-4">
                <img src={IMG2} alt="Ruusara 2023" className="max-h-96 object-scale-down object-center" />
                <div className="lg:col-span-2">
                  <p className=" text-white text-justify text-lg font-round mb-20">
                    {isEng
                      ? ` “Roosara-2023, The Digital Art Competition” is organized for the third consecutive time as one of the events which is organized along with
                    “Let My Country Awake”, The Students’ Festival of Literature organized by the Literary Subcommittee of University of Peradeniya. This
                    competition consists of three main categories which are Dubbing, Photo Manipulation, and Comic Character Creation.`
                      : `"මාගේ දේශය අවදි කරනු මැන" ශිෂ්‍ය සාහිත්‍ය උළෙලට සමගාමීව, පේරාදෙණිය විශ්ව විද්‍යාලීය ඉංජිනේරු පීඨය විසින් "රූසර ඩිජිටල් නිර්මාණ තරඟාවලිය" තෙවන වරට සංවිධානය කරනු ලබයි. තරඟාවලිය හඬ කැවීම්, ඡායාරූප සැකසීම්, ඩිජිටල් චරිත සිතුවම් නිර්මාණය යන ප්‍රධාන තරඟ අංශ යටතේ පැවැත්වේ.`}
                  </p>

                  <Link to="/about" className="animate group text-white text-3xl relative">
                    <p className="z-50 group-hover:translate-x-12 animate">{isEng ? "Read More" : "වැඩි විස්තර"}</p>
                    <div className="-z-10 w-24 h-24 rounded-full bg-neutral-900 opacity-40 absolute -top-4 -left-4 group-hover:scale-150 animate"></div>
                  </Link>
                </div>
              </div>
            </section>
          </main>
          <div className="bg-neutral-900 bg-opacity-40  w-full -mt-20 pt-32">
            <main className="">
              <SectionTitle title={"Upcoming Events"} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                <Link to="dubbing-competition" className="w-full relative overflow-hidden group animate">
                  <img src={E1} alt="Dubbing Competition" className="w-full" />
                  <div className="bg-black bg-opacity-75 w-full absolute -bottom-20 left-0 h-56 animate group-hover:-translate-y-12 p-4 pt-12">
                    <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                      {isEng ? "Dubbing Competition" : "හඬ කැවීමේ තරඟාවලිය"}
                    </h4>
                  </div>
                </Link>
                <Link to="photo-manipulation-competition" className="w-full relative overflow-hidden group animate">
                  <img src={E2} alt="Photo Manipulation Competition" className="w-full" />
                  <div className="bg-black bg-opacity-75 w-full absolute -bottom-20 left-0 h-56 animate group-hover:-translate-y-12 p-4 pt-12">
                    <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                      {isEng ? "Photo Manipulation Competition" : "ඡායාරූප සැකසීම් තරඟාවලිය"}
                    </h4>
                  </div>
                </Link>
                <Link to="comic-character-design-competition" className="w-full relative overflow-hidden group animate">
                  <img src={E3} alt="Comic Character Design Competition" className="w-full" />
                  <div className="bg-black bg-opacity-75 w-full absolute -bottom-20 left-0 h-56 animate group-hover:-translate-y-12 p-4 pt-12">
                    <h4 className="text-center text-white text-3xl lg:text-4xl animate group-hover:scale-105">
                      {isEng ? "Comic Character Design Competition" : "ඩිජිටල් චරිත සිතුවම් නිර්මාණ තරඟාවලිය"}
                    </h4>
                  </div>
                </Link>
              </div>

              <Judges />
              <div className="h-32"></div>
              <SectionTitle title="Gallery" />
              <MyGallery />
            </main>
            <div className="py-12 flex items-center justify-between">
              <img src={C1} alt="" className="w-[20%]" />
              <h3 className="text-white text-center text-5xl lg:text-8xl">
                {isEng ? "ROOSARA" : "රූසර"}
                <br />
                2023
              </h3>
              <img src={C2} alt="" className="w-[20%]" />
            </div>
          </div>
        </HomeLayout>
      )}
    </AppContext.Consumer>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
