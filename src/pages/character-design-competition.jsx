import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";
import E1 from "../images/e6.jpg";
import Judges from "../components/judges";
import MainTitle from "../components/Title";
import PDF from "../docs/Character Designing-rules.pdf";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <AppContext.Consumer>
      {({ isEng }) => (
        <HomeLayout>
          <img src={E1} alt="Character Design Competition" className=" w-full aspect-video max-h-[50vh] object-cover object-center" />

          <main>
            <section className="text-white text-lg font-round">
              <MainTitle title="Character Design Competition" />
              <p className=" text-white text-justify text-lg font-round my-8">
                {isEng
                  ? `Character designing in vector art is the process of creating unique and visually appealing characters using vector-based software.In character
                designing, artists use vector tools to craft distinct features, shapes, and proportions for each character. It empowers artists to bring their
                imaginative ideas to life and captivate audiences with visually compelling and memorable characters.`
                  : `වෙක්ට කලාවේ චරිත නිර්මාණය යනු වෙක්ට මත පදනම් වූ මෘදුකාංග භාවිතයෙන් අද්විතීය සහ දෘශ්‍යමය වශයෙන් ආකර්ෂණීය චරිත නිර්මාණය කිරීමේ ක්‍රියාවලියයි.
                සැලසුම් කිරීම, කලාකරුවන් එක් එක් චරිතය සඳහා වෙනස් ලක්ෂණ, හැඩයන් සහ සමානුපාතිකයන් සැකසීමට දෛශික මෙවලම් භාවිතා කරයි. එය ඔවුන්ගේ ගෙන ඒමට කලාකරුවන්ට බලය ලබා දෙයි
                ජීවිතයට මනඃකල්පිත අදහස් සහ දෘශ්‍යමය වශයෙන් ආකර්ෂණීය සහ අමතක නොවන චරිත සමඟින් ප්‍රේක්ෂකයින් ආකර්ෂණය කරයි.`}
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
                  <li className="mt-2">
                    ● You should be ready to provide original copies of your design at any time. (Do not provide source file while uploading)
                  </li>
                  <li className="mt-2">● Each person can submit only one design for the competition.</li>
                  <li className="mt-2">● It is mandatory to submit a full figure drawing of the character you are presenting.</li>
                  <li className="mt-2">
                    ● If there is a background design, it should be designed so as not to interfere with the portrayal of the respective character.
                  </li>
                  <li className="mt-2">
                    ● To allow your creativity, we do not impose a limit on the software used to make your design and you can make the design with any software.
                    (AI Generators cannot be used.)
                  </li>
                  <li className="mt-2">
                    ● Your designs can be submitted in JPEG or PNG format. The resolution of the design should be more than 960px x 1280px and the size should
                    be less than 20MB.
                  </li>
                  <li className="mt-2">
                    ● The submitted design must be one's own and if traced by another design or found to be someone else's design, the competition will be
                    withdrawn.
                  </li>
                  <li className="mt-2">
                    ● Designs that are politically, religiously or socially harmful will not be submitted for judging and will be removed from the competition.
                  </li>
                  <li className="mt-2">
                    ● All designs submitted must not contain any logos, copyright marks, or any other marks other than the character's identity (name and
                    description are allowed within the design).
                  </li>
                  <li className="mt-2">
                    ● The competition consists of two competition categories as the most creative and most popular design and all designs are included in the
                    two competition categories.
                  </li>
                  <li className="mt-2">
                    ● The most creative design will be selected by the panel of judges and the most popular design will be selected by Facebook likes.
                  </li>
                  <li className="mt-2">● The final decision will be made by the panel of judges.</li>
                  <li className="mt-2">
                    ● A single zip / rar file with your design as a JPEG or PNG as a single file and 50 short introductions about the design (character name and
                    description about the character) as a pdf and all the above files named after the registration number (Rename) should be uploaded as
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
                  <li className="mt-2">● නියමිත දිනට පෙර වෙබ් අඩවි‌යෙහි ලියාපදිිංචි වී අංකයක් ලබා ගත යුතුය.</li>
                  <li className="mt-2">
                    ● ඕනෑම ‌මො‌හොතක ඔබේ නිර්මාණය සිදු කළ මුල් පිටපත් ලබා දීමට සූදානම්ව සිටිය යුතුය.(Upload කිරී‌මේදී Source file ලබා දීම සිදු නොකරන්න)
                  </li>
                  <li className="mt-2">● එක් අයෙකුට තරඟාවලිය සදහා ඉදිරිපත් කල හැක්කේ එක් නිර්මාණයක් පමණි.</li>
                  <li className="mt-2">● ඔබ ඉදිරිපත් කරන කරන Character එකෙහි Full Figure Drawing එකක් ඉදිරිපත් කිරීම අනිවාර්ය වේ.</li>
                  <li className="mt-2">● පසුබිම් නිර්මාණයක් සිදුවන්නේ නම් එය අදාල චරිතය නිරූපණයට බාධාවක් සිදු නොවන ලෙස නිර්මාණය විය යුතුය.</li>
                  <li className="mt-2">
                    ● මෙහිදී ඔබේ නිර්මාණශීලිත්වයට ඉඩ දීම සඳහා අප විසින් ඔබගේ නිර්මාණය සිදු කිරීමට යොදා ගන්නා software සඳහා සීමාවක් පනවන්නේ නැති අතර ඔබට ඕනෑම
                    software එකකින් නිර්මාණය සිදුකල හැක.(AI Generators භාවිතා කළ ෙනාහැකිය.)
                  </li>
                  <li className="mt-2">
                    ● ඔබගේ නිර්මාණ JPEG හෝ PNG ආකාරයට ඉදිරිපත් කල හැකිය. නිර්මාණයේ resolution 960px x 1280px වඩා වැඩි විය යුතු අතර ධාරිතාවය 20MB වට වඩා අඩු විය
                    යුතුය.
                  </li>
                  <li className="mt-2">
                    ● ඉදිරිපත් කරන නිර්මාණය තමන්ගේම විය යුතු අතර වෙනත් නිර්මාණයකින් Trace කිරීම හෝ නිර්මාණය වෙනත් අයෙකුගේ බව තහවුරු වුවහොත් තරඟාවලියෙන් ඉවත්
                    වීමට සිදු වේ.
                  </li>
                  <li className="mt-2">● දේශපාලනය, ආගම්වාදය හා සමාජයට හානිකර නිර්මාණයක් විනිශ්චය සඳහා ඉදිරිපත්කරනු නොලබන අතර ඒවා තරඟයෙන් ඉවත් කරනු ලැබේ.</li>
                  <li className="mt-2">
                    ● ඉදිරිපත් කරන සියළුම නිර්මාණ තුල character එකෙහි අනන්‍යතාවය (නම සහ විස්තරයක් නිර්මාණය ඇතුලත ඉදිරිපත් කිරීමට අවසර ඇත) හැර කිසිදු ආකාරයේ
                    ලාංඡන (logo), කතෘ අයිතිය සම්බන්ධ සලකුණු (copyright marks), හෝ වෙනත් කිසිදු ආකාරයේ සළකුණු නොතිබිය යුතුය.
                  </li>
                  <li className="mt-2">
                    ● නිර්මාණාත්මකම හා ජනප්‍රියතම නිර්මාණය ලෙස තරඟ කාණ්ඩ දෙකකින් තරඟය සමන්විත වන අතර සියළුම නිර්මාණ තරඟ කාණ්ඩ දෙකට අඩංගු වේ.
                  </li>
                  <li className="mt-2">
                    ● නිර්මාණාත්මකම නිර්මාණය විනිශ්චය මණ්ඩලය මඟින් තෝරාදෙන අතර ජනප්‍රියම නිර්මාණය සඳහා නිර්මාණයට හිමිවන මනාප (facebook likes) මඟින් තෝරාගනු
                    ලැබේ.
                  </li>
                  <li className="mt-2">● විනිශ්චය මණ්ඩලය මඟින් අවසාන තීරණය ලබා දෙනු ලැබේ.</li>
                  <li className="mt-2">
                    ● ඔබගේ නිර්මාණය JPEG හෝ PNG ලෙස තනි ගොනුවක් ලෙසත්, නිර්මාණය පිලිබද 50කට ෙනාවැ􀆋 කෙටි හැඳින්වීම (character name and description about the
                    character) pdf එකක් ලෙසත් පැහැදිලිව සඳහන් කර ඉහත සඳහන් සියලුම ගොනු ලියාපදිංචි අංකය නමින් නම් කරන ලද (Rename) තනි zip / rar ගොනුවක් ලෙස උඩුගත
                    කල යුතුය.
                  </li>
                  <li className="mt-2">● ඔබපේ නිර්මාණය උඩුගත කිරීමේදී ඔබේ නිර්මාණයේ layers වල screenshot කිහිපයක් නිර්මාණය සමග උඩුගත කිරීම අතයවශය වේ.</li>
                  <li className="mt-2">
                    ● උඩුගත කිරීමට ප්‍රථමව අපගෙ වෙබ් අඩවි (https://rusara2023.github.io/official/) ඇති ගූගල් ෆෝරමය පුරවා ඒ හරහා zip ගොනුව උඩුගත කල යුතුය.
                  </li>
                </ul>
              )}
            </section>
            <br />
            <a href={PDF} download="Character Design Competition Rules" target="_blank" rel="noreferrer" className="bg-white text-black p-2 rounded my-4">
              Download Rules
            </a>
            <br />
            <br />
            <div className="w-full flex justify-center">
              <Link
                to="/register"
                className="bg-red-800 rounded text-2xl animate hover:bg-red-500 hover:scale-110 text-white py-2 px-4 mx-auto cursor-pointer hover:shadow-lg shadow-red-400"
              >
                Register Now
              </Link>
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
