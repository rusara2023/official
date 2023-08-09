import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";
import E1 from "../images/e4.jpg";
import MainTitle from "../components/Title";
import Judges from "../components/judges";
import PDF from "../docs/Dubbing-rules.pdf";
import { Button } from "@material-tailwind/react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <AppContext.Consumer>
      {({ isEng }) => (
        <HomeLayout>
          <img src={E1} alt="Dubbing Competition" className=" w-full aspect-video max-h-[50vh] object-cover object-center" />
          <main>
            <section className="text-white text-lg font-round">
              <MainTitle title="Dubbing Competition" />

              <p className=" text-white text-justify text-lg font-round my-8">
                {isEng
                  ? `Dubbing is the art of replacing the voices in a film or TV show with translated dialogue in a different language. It enables viewers to understand
            and enjoy content without relying on subtitles.Dubbing brings global entertainment to diverse audiences, breaking down language barriers and
            fostering cultural exchange.`
                  : `හඬකැවීම යනු චිත්‍රපටයක හෝ රූපවාහිනී වැඩසටහනක හඬ වෙනුවට වෙනත් භාෂාවකින් පරිවර්තිත දෙබස් දැමීමේ කලාවයි. එය නරඹන්නන්ට තේරුම් ගැනීමට ඉඩ සලසයි
            සහ උපසිරැසි මත රඳා නොසිට අන්තර්ගතය රසවිඳින්න.හඬකැවීම් විවිධ ප්‍රේක්ෂකයින් වෙත ගෝලීය විනෝදාස්වාදය ගෙන එයි, භාෂා බාධක බිඳ දමයි
            සංස්කෘතික හුවමාරුව පෝෂණය කිරීම.`}
              </p>
              <h4 className="text-3xl text-white underline">{isEng ? "Rules and Regulations" : "තරඟ නීති සහ රෙගුලාසි"}</h4>
              <p className=" text-white text-justify text-lg font-round mt-8">
                {isEng
                  ? "All contestants participating in the contest must read and understand all contest rules."
                  : "තරඟයට සහභාගි වන සියළු තරඟකරුවන් තරඟ නීති රීතී සියල්ල හොඳින් කියවා අවබෝධ කරගත යුතුය."}
              </p>
              {isEng ? (
                <ul className="mt-4 ml-4">
                  <li className="mt-2">
                    ● Before uploading you need to register through our website (https://rusara2023.github.io/official/) and get a registration number. (Future
                    updates will be communicated through WhatsApp)
                  </li>

                  <li className="mt-2">● Your voiceover script must be your own creation.</li>
                  <li className="mt-2">
                    ● You can do dubbing for any 2 videos you like through 2 sections, dubbing cartoon characters and dubbing human characters.
                  </li>
                  <li className="mt-2">● Videos should not be edited or otherwise modified.</li>
                  <li className="mt-2">
                    ● If previous dialogues (Copyright content) have been used for voiceovers, they will be removed from the competition.
                  </li>
                  <li className="mt-2">● Contestants must submit their designs online before the due date.</li>
                  <li className="mt-2">● Only 2 designs can be submitted per team.</li>
                  <li className="mt-2">● The maximum number of members that can join a group is 5.</li>
                  <li className="mt-2">
                    ● Political slurs and racist dialogues should disappear. Any such dialogue will be disqualified from the competition.
                  </li>
                  <li className="mt-2">● Do not use vulgar, harsh, harsh words. Any such dialogue will be disqualified from the competition.</li>
                  <li className="mt-2">● The uploaded video size should be less than 500MB.</li>
                  <li className="mt-2">● Videos should be submitted in mp4 format. A frame size of 1920x1080 can be used.</li>
                  <li className="mt-2">● The contest consists of two categories of contests, the most creative and the most popular design.</li>
                  <li className="mt-2">
                    ● The most creative videos will be selected by the jury and the best 10 creative videos will be published on our Facebook page and the most
                    popular design will be selected by Facebook likes.
                  </li>
                  <li className="mt-2">● The decision of the judging panel is final.</li>
                  <li className="mt-2">
                    ● In awarding points, the judging panel mainly,
                    <ul className="ml-12">
                      <li className="mt-2">(i) The creativity of the video </li>
                      <li className="mt-2">(ii) Voice adjustment and control by character</li>
                      <li className="mt-2">(iii) Flow of video and dialogues </li>
                      <li className="mt-2">(iv) Considers the meaningfulness and coherence of the dialogue in the video.</li>
                    </ul>
                  </li>
                  <li className="mt-2">● The final design should be uploaded as a single zip/rar file named (Rename) with the registration number.</li>
                  <li className="mt-2">
                    ● Before uploading, you need to fill the google form on our website (https://rusara2023.github.io/official/) and upload the zip file through
                    it.
                  </li>
                </ul>
              ) : (
                <ul className="mt-4 ml-4">
                  <li className="mt-2">
                    ● උඩුගත කිරීමට ප්‍රථමව අපගේ වෙබ් අඩවිය (https://rusara2023.github.io/official/) හරහා ලියාපදිංචි වී, ලියාපදිංචි අංකයක් ලබා ගත යුතුය.(කාලීන
                    තොරතුරු වට්ස්ඇප් හරහා දැනුම් දෙනු ලැබේ).
                  </li>
                  <li className="mt-2">● ඔබගේ හඬ කැවීම් පිටපත (script) ඔබගේ නිර්මාණයක් විය යුතුය.</li>
                  <li className="mt-2">● cartoon චරිත හඬකැවීම සහ මිනිස් චරිත හඬකැවීම යන අංශ 2ක් ඔස්සේ ඔබ කැමැති ඕනෑම වීඩියෝ 2ක් සඳහා හඬකැවීම් කළ හැක.</li>
                  <li className="mt-2">● වීඩියෝ පටයන් සංසේකරණය හෝ වෙනත් වෙනසේකම් වලට ලක් කිරීම් නොකළ යුතුය.</li>
                  <li className="mt-2">● හඬ කැවීම් සඳහා ‌පෙර දෙබස් (Copyright content) භාවිතා කර තිබුණහොත් තරගයෙන් ඉවත් කරනු ලැ‌බේ.</li>
                  <li className="mt-2">● තරඟකරුවන් තම නිර්මාණ නියමිත දිනට පෙර මාර්ගගත ක්‍රමයෙන් ඉදිරිපත්කල යුතුය.</li>
                  <li className="mt-2">● එක් කණ්ඩායමකට ඉදිරිපත් කල හැකිවන්නේ නිර්මාණ 2ක් පමණි.</li>
                  <li className="mt-2">● එක් කණ්ඩායමකට සම්බන්ධ විය හැකි උපරිම සාමාජිකයන් ගණන 5කි.</li>
                  <li className="mt-2">● දේශපාලනික මඩ ගැසීම්, ජාතිවාදි දෙබස් නැති විය යුතුයි. එවැනි දෙබස් ඇතුළත් වේනම් තරඟයෙන් ඉවත් කරනු ලැබේ.</li>
                  <li className="mt-2">● අසභ්‍ය වචන,පරුෂ, සැර වචන භාවිතා නොකල යුතුයි. එවැනි දෙබස් ඇතුළත් වේනම් තරඟයෙන් ඉවත් කරනු ලැබේ. </li>
                  <li className="mt-2">● Upload කරනු ලබන වීඩියෝ size එක 500MB ට අඩුවිය යුතුය. </li>
                  <li className="mt-2">● වීඩියෝ mp4 ආකාරයෙන් ඉදිරිපත් කල යුතයු . 1920x1080 කැමති frame size එකක් භාවිතා කලහැක.</li>
                  <li className="mt-2">● නිර්මාණාත්මකම හා ජනප්‍රියතම නිර්මාණය ලෙස තරඟ කාණ්ඩ දෙකකින් තරඟය සමන්විත වේ.</li>
                  <li className="mt-2">
                    ● නිර්මාණාත්මකම වීඩියෝ පටයන් විනිශ්චය මණ්ඩලය මඟින් තෝරාදෙන අතර ඉන් හොඳම නිර්මාණාත්මක වීඩියෝ 10 අපගේ Facebook පිටුවෙහි පල කරනු ලබන අතර ඉන්
                    ජනප්‍රියම නිර්මාණය Facebook මනාප (Facebook likes) මඟින් තෝරාගනු ලැබේ.
                  </li>
                  <li className="mt-2">● විනිශ්චය මණ්ඩලයේ තීරණය අවසාන තීරණය වේ. </li>
                  <li className="mt-2">
                    ● ලකුණු ලබාදීමේදි විනිශ්චය මණ්ඩලය ප්‍රධාන ලෙස,
                    <ul className="ml-12">
                      <li className="mt-2">(i) වීඩියෝ පටයේ නිර්මාණාත්මක බව </li>
                      <li className="mt-2">(ii) චරිතයට අනුව හඬ ගැලපීම සහ පාලනය </li>
                      <li className="mt-2">(iii) වීඩියෝ පටයේ හා දෙබස් වල ගලා යාම </li>
                      <li className="mt-2">(iv) වීඩියෝ පටයේ දෙබස් වල අර්ථවත් බව හා සුසංයෝගය සලකා බලයි.</li>
                    </ul>
                  </li>
                  <li className="mt-2">● අවසන් නිර්මාණය, ලියාපදිංචි අංකය නමින් නම් කරන ලද (Rename) තනි zip / rar ගොනුවක් ලෙස උඩුගත කල යුතුය.</li>
                  <li className="mt-2">
                    ● උඩුගත කිරීමට ප්‍රථමව අපගේ වෙබ් අඩවිය (https://rusara2023.github.io/official/) ඇති ගූගල් ෆෝරමය පුරවා ඒ හරහා zip ගොනුව උඩුගත කල යුතුය.
                  </li>
                </ul>
              )}
              <br />
              <h4 className="text-3xl text-white underline">{isEng ? "Judge Board" : "විනිශ්චය මණ්ඩලය"}</h4>
              <p className=" text-white text-justify text-2xl font-round ml-8">{isEng ? "Mr.Pasan Ranaweera" : "පසන් රණවීර"}</p>
              <p className=" text-white text-justify text-2xl font-round  ml-8">{isEng ? "Mr.Ishara Wicramasinghe" : "ඉශාර වික්‍රමසිංහ"}</p>

              <br />
              <br />

              <a href={PDF} download="Dubbing Competition Rules" target="_blank" rel="noreferrer" className="bg-white text-black p-2 rounded my-4">
                Download Rules
              </a>
              <br />
              <br />
              <div className="w-full flex justify-center">
                <Link
                  to="/register"
                  className="bg-red-800 m-2 rounded text-2xl animate hover:bg-red-500 hover:scale-110 text-white py-2 px-4 cursor-pointer hover:shadow-lg shadow-red-400"
                >
                  Register Now
                </Link>
                <a
                  href="https://forms.gle/MmZwwNfpUynEVb456"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-800 m-2  rounded text-2xl animate hover:bg-blue-500 hover:scale-110 text-white py-2 px-4 cursor-pointer hover:shadow-lg shadow-red-400"
                >
                  Submit Now
                </a>
              </div>
              <h4 className="text-3xl text-white animate-pulse text-center font-medium  mt-4">Submission Deadline : 2023 August 20</h4>

              <br />
              <br />
            </section>
            {/* <Judges /> */}
          </main>
        </HomeLayout>
      )}
    </AppContext.Consumer>
  );
};

export default IndexPage;
