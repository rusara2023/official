import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";
import E2 from "../images/e5.jpg";
import Judges from "../components/judges";
import MainTitle from "../components/Title";
import PDF from "../docs/Photo Manipulation-rules.pdf";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <AppContext.Consumer>
      {({ isEng }) => (
        <HomeLayout>
          <img src={E2} alt="Photo Manipulation Competition" className=" w-full aspect-video max-h-[50vh] object-cover object-center" />
          <main>
            <section className="text-white text-lg font-round">
              <MainTitle title="Photo Manipulation Competition" />
              <p className=" text-white text-justify text-lg font-round my-8">
                {isEng
                  ? `   Photo manipulation is the art of digitally altering or enhancing images to create stunning, imaginative, and sometimes surreal compositions. By
                utilizing advanced software tools, photographers and artists can add, remove, or modify elements within a photograph, giving rise to captivating
                visual narratives. Photo manipulation unleashes creativity and enables the transformation of ordinary images into extraordinary works of art,
                blurring the boundaries between reality and imagination.`
                  : `ඡායාරූප හැසිරවීම යනු සිත් ඇදගන්නාසුළු, මනඃකල්පිත සහ සමහර විට අති යථාර්ථවාදී සංයුති නිර්මාණය කිරීම සඳහා රූප ඩිජිටල් ලෙස වෙනස් කිරීමේ හෝ වැඩිදියුණු කිරීමේ කලාවයි. විසින්
                උසස් මෘදුකාංග මෙවලම් භාවිතයෙන්, ඡායාරූප ශිල්පීන්ට සහ කලාකරුවන්ට ඡායාරූපයක් තුළ ඇති මූලද්‍රව්‍ය එක් කිරීමට, ඉවත් කිරීමට හෝ වෙනස් කිරීමට හැකි වන අතර, එය සිත් ඇදගන්නා සුළු බවක් ඇති කරයි.
                දෘශ්ය ආඛ්යාන. ඡායාරූප හැසිරවීම නිර්මාණශීලීත්වය මුදාහරින අතර සාමාන්‍ය රූප අසාමාන්‍ය කලා කෘති බවට පරිවර්තනය කිරීමට ඉඩ සලසයි.
                යථාර්ථය සහ පරිකල්පනය අතර සීමාවන් බොඳ කිරීම.`}
              </p>
              <h4 className="text-3xl text-white underline">{isEng ? "Rules and Regulations" : "තරඟ නීති සහ රෙගුලාසි"}</h4>
              <p className=" text-white text-justify text-lg font-round mt-8">
                {isEng
                  ? "All contestants participating in the contest must read and understand all contest rules."
                  : "තරඟයට සහභාගි වන සියළු තරඟකරුවන් තරඟ නීති රීතී සියල්ල හොඳින් කියවා අවබෝධ කරගත යුතුය."}
              </p>
              {isEng ? (
                <ul className="mt-4 ml-4">
                  <li className="mt-2">● 
Before uploading you need to register through our website (https://rusara2023.github.io/official/) and get a registration number.(Future Updates will be communicated through WhatsApp)</li>
                  <li className="mt-2">● Contestants must submit their designs online before the due date. </li>
                  <li className="mt-2">
                    ● You should be ready to provide original copies of your design at any time. (Do not provide source file while uploading)
                  </li>
                  <li className="mt-2">● Each contestant can submit only one design. </li>
                  <li className="mt-2">● Original photos used for the design must be submitted. </li>
                  (AI Generators cannot be used.)
                  <br />
                  <li className="mt-2">● All responsibilities related to the copyright of the original photographs belong to the creator. </li>
                  <li className="mt-2">● The maximum number of original photos that can be used is 8.</li>
                  <li className="mt-2">● Designs can be submitted in JPEG or PNG format. </li>
                  <li className="mt-2">● The contestant is free to present designs in a way that conveys an important message to the society. </li>
                  <li className="mt-2">
                    ● Any design that contains politics and religion will not be submitted for judging and will be removed from the competition.
                  </li>
                  <li className="mt-2">● A short introduction should be submitted as a pdf file in a way that does not exceed 50 words. </li>
                  <li className="mt-2">● All submitted designs must not contain any logos, copyright marks, identifying marks, borders or any other marks.</li>
                  <li className="mt-2">
                    ● The competition consists of two competition categories as the most creative and most popular design and all designs are included in the
                    two competition categories.
                  </li>
                  <li className="mt-2">
                    ● The most creative design will be judged by the panel of judges and the most popular design will be selected based on the facebook likes of
                    the design.
                  </li>
                  <li className="mt-2">● The decision of the Tribunal is final. </li>
                  <li className="mt-2">
                    ● Clearly mention the original photos in a single file and the final design in another single file and the brief introduction in another
                    single file. All files should be uploaded as a single zip/rar file named (Rename) with registration number.
                  </li>
                  <li className="mt-2">
                    ● When uploading your design, it is mandatory to upload some screenshots of the layers of your design along with the design.
                  </li>
                  <li className="mt-2">
                    ● Before uploading, you need to fill the google form on our website (https://rusara2023.github.io/official/) and upload the zip file through
                    it.
                  </li>
                </ul>
              ) : (
                <ul className="mt-4 ml-4">
                  <li className="mt-2">● නියමිත දිනට පෙර වෙබ් අඩවිපයහි ලියාපදිිංචි වී අංකයක් ලබා ගත යුතුය.</li>
                  <li className="mt-2">● තරඟකරුවන් තම නිර්මාණ නියමිත දිනට පෙර මාර්ගගත ක්‍රමයෙන් ඉදිරිපත්කල යුතුය. </li>
                  <li className="mt-2">
                    ● ඕනෑම ‌මො‌හොතක ඔබේ නිර්මාණය සිදු කළ මුල් පිටපත් ලබා දීමට සූදානම්ව සිටිය යුතුය.(Upload කිරී‌මේදී Source file ලබා දීම සිදු නොකරන්න)
                  </li>
                  <li className="mt-2">● එක් තරඟකරුවෙක්ට ඉදිරිපත් කල හැකිවන්නේ එක නිර්මාණයක් පමණි. </li>
                  <li className="mt-2">● නිර්මාණය සඳහා යොදාගත් මුල් ඡායාරූප ඉදිරිපත් කල යුතුය. </li>
                  (AI Generators භාවිතා කළ නොහැකිය.)
                  <br />
                  <li className="mt-2">● මුල් ඡායාරූප වල කතෘ අයිතිය සම්බන්ධ සියලු වගකීම් නිර්මාණකරු සතුය. </li>
                  <li className="mt-2">● භාවිතා කළ හැකි උපරිම මුල් ඡායාරූප ගණන 8කි. </li>
                  <li className="mt-2">● JPEG හෝ PNG ආකාරයට නිර්මාණ ඉදිරිපත් කළ හැකිය. </li>
                  <li className="mt-2">● සමාජයට වැදගත් පණිවිඩියක් ලබාදෙන අයුරින් නිර්මාණ ඉදිරිපත් කිරීමට තරඟකරුට නිදහස ඇත. </li>
                  <li className="mt-2">
                    ● දේශපාලනය හා ආගම්වාදය අන්තර්ගත වන කිසිදු නිර්මාණයක් විනිශ්චය සඳහා ඉදිරිපත්කරනු නොලබන අතර ඒවා තරඟයෙන් ඉවත් කරනු ලැබේ.{" "}
                  </li>
                  <li className="mt-2">● තම නිර්මාණය මගින් හැඟවෙන පණිවිඩය වචන 50 කට නොවැඩි වන අයුරින් කෙටි හැඳින්වීමක් pdf ගොනුවක් ලෙස ඉදිරිපත් කළ යුතුය. </li>
                  <li className="mt-2">
                    ● ඉදිරිපත් කරන සියළුම නිර්මාණ තුල කිසිදු ආකාරයේ ලාංඡන(logo), කතෘ අයිතිය සම්බන්ධ සලකුණු (copyright marks), අනන්‍යතාවය හඟවන සළකුණු
                    (identifying marks), මායිම් (borders) හෝ වෙනත් කිසිදු ආකාරයේ සළකුණු නොතිබිය යුතුය.
                  </li>
                  <li className="mt-2">
                    ● නිර්මාණාත්මකම හා ජනප්‍රියතම නිර්මාණය ලෙස තරඟ කාණ්ඩ දෙකකින් තරඟය සමන්විත වන අතර සියළුම නිර්මාණ තරඟ කාණ්ඩ දෙකට අඩංගු වේ.{" "}
                  </li>
                  <li className="mt-2">
                    ● නිර්මාණාත්මකම නිර්මාණය විනිශ්චය මණ්ඩලය මඟින් විනිශ්චය කරන අතර ජනප්‍රියම නිර්මාණය සඳහා නිර්මාණයට හිමිවන facebook මනාප (likes) මඟින් තෝරාගනු
                    ලැබේ.
                  </li>
                  <li className="mt-2">● විනිශ්චය මණ්ඩලයේ තීරණය අවසාන තීරණය වේ. </li>
                  <li className="mt-2">
                    ● මුල් ඡායාරූප තනි ගොනුවකත් හා අවසන් නිර්මාණය වෙනත් තනි ගොනුවකත් හා කෙටි හැඳින්වීම වෙනත් තනි ගොනුවකත් ලෙස පැහැදිලිව සඳහන් කර ඉහත සඳහන්
                    සියලුම ගොනු ලියාපදිංචි අංකය නමින් නම් කරන ලද (Rename) තනි zip / rar ගොනුවක් ලෙස උඩුගත කල යුතුය.
                  </li>
                  <li className="mt-2">● ඔබපේ නිර්මාණය උඩුගත කිරීමේදී ඔබේ නිර්මාණයේ layers වල screenshot කිහිපයක් නිර්මාණය සමග උඩුගත කිරීම අතයවශය වේ.</li>
                  <li className="mt-2">
                    ● උඩුගත කිරීමට ප්‍රථමව අපගෙ වෙබ් අඩවි (https://rusara2023.github.io/official/) ඇති ගූගල් ෆෝරමය පුරවා ඒ හරහා zip ගොනුව උඩුගත කල යුතුය.
                  </li>
                </ul>
              )}
            </section>
            <br />
            <a href={PDF} download="Photo Manipulation Competition Rules" target="_blank" rel="noreferrer" className="bg-white text-black p-2 rounded my-4">
              Download Rules
            </a>
            <br />
            <br />
            <div className="w-full flex justify-center">
              <Link
                to="/register"
                className="bg-red-800 rounded text-2xl animate hover:bg-red-500 hover:scale-110 text-white py-2 px-4 m-2 cursor-pointer hover:shadow-lg shadow-red-400"
              >
                Register Now
              </Link>
                   <a
                  href="https://forms.gle/SsngRgqTKcRaJRmU6"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-800 m-2  rounded text-2xl animate hover:bg-blue-500 hover:scale-110 text-white py-2 px-4 cursor-pointer hover:shadow-lg shadow-red-400"
                >
                  Submit Now
                </a>
            </div>
            <br />
            <br />
            <Judges />
          </main>
        </HomeLayout>
      )}
    </AppContext.Consumer>
  );
};

export default IndexPage;
