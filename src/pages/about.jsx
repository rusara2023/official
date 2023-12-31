import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import SectionTitle from "../components/SectionTitle";
import { Link } from "gatsby";
import MainTitle from "../components/Title";
import { AppContext } from "../context/context";

const IndexPage = () => {
  return (
    <AppContext.Consumer>
      {({ isEng, handleLan }) => (
        <HomeLayout>
          <main>
            <section>
              <MainTitle title="About Us" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full py-4">
                <img src={IMG2} alt="Ruusara 2023" className="max-h-96 object-scale-down object-center" />
                <div className="lg:col-span-2">
                  <p className=" text-white text-justify text-lg font-round mb-20">
                    {isEng
                      ? ` “Roosara-2023, The Digital Art Competition” is organized for the third consecutive time as one of the events which is organized along with
                    “Let My Country Awake”, The Students’ Festival of Literature organized by the Literary Subcommittee of University of Peradeniya. This
                    competition consists of three main categories which are Dubbing, Photo Manipulation, and Character Creation.`
                      : `"මාගේ දේශය අවදි කරනු මැන" ශිෂ්‍ය සාහිත්‍ය උළෙලට සමගාමීව, පේරාදෙණිය විශ්ව විද්‍යාලීය ඉංජිනේරු පීඨය විසින් "රූසර ඩිජිටල් නිර්මාණ තරඟාවලිය" තෙවන වරට සංවිධානය කරනු ලබයි. තරඟාවලිය හඬ කැවීම්, ඡායාරූප සැකසීම්, ඩිජිටල් චරිත සිතුවම් නිර්මාණය යන ප්‍රධාන තරඟ අංශ යටතේ පැවැත්වේ.`}
                  </p>

                  <h2 className="text-white text-3xl mt-8 mb-4">{isEng ? "Objectives" : "අරමුණු"}</h2>

                  <p className=" text-white text-justify text-lg font-round">
                    {isEng
                      ? `1. Improve technical and aesthetic knowledge and interest in digital art.`
                      : `1. ඩිජිටල් කලාව පිළිබඳ තාක්ෂණික හා සෞන්දර්යාත්මක දැනුම හා උනන්දුව වැඩිදියුණු කිරීම.`}
                  </p>
                  <p className=" text-white text-justify text-lg font-round">
                    {isEng
                      ? `2. Develop creativity.`
                      : `2. නිර්මාණශීලීත්වය වර්ධනය කිරීම.`}
                  </p>
                  <p className=" text-white text-justify text-lg font-round">
                    {isEng
                      ? `3. Developing capabilities in digital art.`
                      : `3. ඩිජිටල් කලාව පිළිබඳ හැකියාවන් වර්ධනය කිරීම.`}
                  </p>
                  <p className=" text-white text-justify text-lg font-round">
                    {isEng
                      ? `4. Enjoy and appreciate various types of digital arts.`
                      : `4. නොයෙක් වර්ගයේ ඩිජිටල් කලාවන් රසවිඳීම හා අගය කිරීම.`}
                  </p>
                  <p className=" text-white text-justify text-lg font-round">
                    {isEng
                      ? `5. Introducing and encouraging young designers.`
                      : `5. තරුණ නිර්මාණකරුවන් හදුන්වාදීම හා ඔවුන්ම දිරිමත් කීරිම.`}
                  </p>
                  {/* <Link to="/about" className="animate group text-white text-3xl relative">
                <p className="z-50 group-hover:translate-x-12 animate">Read More</p>
                <div className="-z-10 w-24 h-24 rounded-full bg-neutral-900 opacity-40 absolute -top-4 -left-4 group-hover:scale-150 animate"></div>
              </Link> */}
                </div>
              </div>
            </section>
          </main>
        </HomeLayout>
      )}
    </AppContext.Consumer>
  );
};

export default IndexPage;
