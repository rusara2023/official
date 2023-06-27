import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";
import E1 from "../images/e6.jpg";
import Judges from "../components/judges";
import MainTitle from "../components/Title";
import PDF from "../docs/Character Designing-rules.pdf";
const IndexPage = () => {
  return (
    <HomeLayout>
      <img src={E1} alt="Character Design Competition" className=" w-full aspect-video max-h-[50vh] object-cover object-center" />

      <main>
        <section className="text-white text-lg font-round">
          <MainTitle title="Character Design Competition" />
          <h4 className="text-3xl text-white underline">තරඟ නීති සහ රෙගුලාසි</h4>
          <p className=" text-white text-justify text-lg font-round mt-8">
            තරඟයට සහභාගි වන සියළු තරඟකරුවන් තරඟ නීති රීතී සියල්ල හොඳින් කියවා අවබෝධ කරගත යුතුය.
          </p>
          <ul className="mt-4 ml-4">
            <li className="mt-2">● එක් අයෙකුට තරඟාවලිය සදහා ඉදිරිපත් කල හැක්කේ එක් නිර්මාණයක් පමණි.</li>
            <li className="mt-2">● ඔබ ඉදිරිපත් කරන කරන Character එකෙහි Full Figure Drawing එකක් ඉදිරිපත් කිරීම අනිවාර්ය වේ.</li>
            <li className="mt-2">● පසුබිම් නිර්මාණයක් සිදුවන්නේ නම් එය අදාල චරිතය නිරූපණයට බාධාවක් සිදු නොවන ලෙස නිර්මාණය විය යුතුය.</li>
            <li className="mt-2">
              ● මෙහිදී ඔබේ නිර්මාණශීලිත්වයට ඉඩ දීම සඳහා අප විසින් ඔබගේ නිර්මාණය සිදු කිරීමට යොදා ගන්නා software සඳහා සීමාවක් පනවන්නේ නැති අතර ඔබට ඕනෑම software
              එකකින් නිර්මාණය සිදුකල හැක.(AI Generators භාවිතා කළ ෙනාහැකිය.)
            </li>
            <li className="mt-2">
              ● ඔබගේ නිර්මාණ JPEG හෝ PNG ආකාරයට ඉදිරිපත් කල හැකිය. නිර්මාණයේ resolution 960px x 1280px වඩා වැඩි විය යුතු අතර ධාරිතාවය 20MB වට වඩා අඩු විය යුතුය.
            </li>
            <li className="mt-2">● ඔබේ නිර්මාණය සිදුකල මුල් පිටපත (source file) ලබා දීම අනිවාර්ය වෙයි. </li>
            <li className="mt-2">
              ● ඉදිරිපත් කරන නිර්මාණය තමන්ගේම විය යුතු අතර වෙනත් නිර්මාණයකින් Trace කිරීම හෝ නිර්මාණය වෙනත් අයෙකුගේ බව තහවුරු වුවහොත් තරඟාවලියෙන් ඉවත් වීමට සිදු
              වේග
            </li>
            <li className="mt-2">● දේශපාලනය, ආගම්වාදය හා සමාජයට හානිකර නිර්මාණයක් විනිශ්චය සඳහා ඉදිරිපත්කරනු නොලබන අතර ඒවා තරඟයෙන් ඉවත් කරනු ලැබේ.</li>
            <li className="mt-2">
              ● ඉදිරිපත් කරන සියළුම නිර්මාණ තුල character එකෙහි අනන්‍යතාවය (නම සහ විස්තරයක් නිර්මාණය ඇතුලත ඉදිරිපත් කිරීමට අවසර ඇත) හැර කිසිදු ආකාරයේ ලාංඡන
              (logo), කතෘ අයිතිය සම්බන්ධ සලකුණු (copyright marks), හෝ වෙනත් කිසිදු ආකාරයේ සළකුණු නොතිබිය යුතුය.
            </li>
            <li className="mt-2">● නිර්මාණාත්මකම හා ජනප්‍රියතම නිර්මාණය ලෙස තරඟ කාණ්ඩ දෙකකින් තරඟය සමන්විත වන අතර සියළුම නිර්මාණ තරඟ කාණ්ඩ දෙකට අඩංගු වේ.</li>
            <li className="mt-2">
              ● නිර්මාණාත්මකම නිර්මාණය විනිශ්චය මණ්ඩලය මඟින් තෝරාදෙන අතර ජනප්‍රියම නිර්මාණය සඳහා නිර්මාණයට හිමිවන මනාප (facebook likes) මඟින් තෝරාගනු ලැබේ.
            </li>
            <li className="mt-2">● විනිශ්චය මණ්ඩලය මඟින් අවසාන තීරණය ලබා දෙනු ලැබේ.</li>
            <li className="mt-2">
              ● ඔබගේ නිර්මාණය JPEG හෝ PNG ලෙස තනි ගොනුවක් ලෙසත්, නිර්මාණය පිලිබද 50කට ෙනාවැ􀆋 කෙටි හැඳින්වීම (character name and description about the character)
              pdf එකක් ලෙසත් පැහැදිලිව සඳහන් කර ඉහත සඳහන් සියලුම ගොනු තනි zip / rar ගොනුවක් ලෙස උඩුගත කල යුතුය.
            </li>
            <li className="mt-2">
              ● උඩුගත කිරීමට ප්‍රථමව අපගෙ වෙබ් අඩවි (https://rusara2023.github.io/official/) ඇති ගූගල් ෆෝරමය පුරවා ඒ හරහා ‘සච ගොනුව උඩුගත කල යුතුය
            </li>
          </ul>
        </section>
          <br />
          <a href={PDF} download="Character Design Competition Rules" target="_blank" rel="noreferrer" className="bg-white text-black p-2 rounded my-4">
            Download Rules
          </a>
          <br />
          <br />
        <Judges />
      </main>
    </HomeLayout>
  );
};

export default IndexPage;
