import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";
import E2 from "../images/e5.jpg";
import Judges from "../components/judges";
import MainTitle from "../components/Title";
import PDF from "../docs/Photo Manipulation-rules.pdf";
const IndexPage = () => {
  return (
    <HomeLayout>
      <img src={E2} alt="Photo Manipulation Competition" className=" w-full aspect-video max-h-[50vh] object-cover object-center" />
      <main>
        <section className="text-white text-lg font-round">
          <MainTitle title="Photo Manipulation Competition" />
          <p className=" text-white text-justify text-lg font-round my-8">
            Photo manipulation is the art of digitally altering or enhancing images to create stunning, imaginative, and sometimes surreal compositions. By
            utilizing advanced software tools, photographers and artists can add, remove, or modify elements within a photograph, giving rise to captivating
            visual narratives. Photo manipulation unleashes creativity and enables the transformation of ordinary images into extraordinary works of art,
            blurring the boundaries between reality and imagination.
          </p>
          <h4 className="text-3xl text-white underline">තරඟ නීති සහ රෙගුලාසි</h4>
          <p className=" text-white text-justify text-lg font-round mt-8">
            තරඟයට සහභාගි වන සියළු තරඟකරුවන් තරඟ නීති රීතී සියල්ල හොඳින් කියවා අවබෝධ කරගත යුතුය.
          </p>
          <ul className="mt-4 ml-4">
            <li className="mt-2">● තරඟකරුවන් තම නිර්මාණ නියමිත දිනට පෙර මාර්ගගත ක්‍රමයෙන් ඉදිරිපත්කල යුතුය. </li>
            <li className="mt-2">● එක් තරඟකරුවෙක්ට ඉදිරිපත් කල හැකිවන්නේ එක නිර්මාණයක් පමණි. </li>
            <li className="mt-2">● නිර්මාණය සඳහා යොදාගත් මුල් ඡායාරූප ඉදිරිපත් කල යුතුය. </li>
            (AI Generators භාවිතා කළ නොහැකිය.)
            <br />
            <li className="mt-2">● මුල් ඡායාරූප වල කතෘ අයිතිය සම්බන්ධ සියලු වගකීම් නිර්මාණකරු සතුය. </li>
            <li className="mt-2">● භාවිතා කළ හැකි උපරිම මුල් ඡායාරූප ගණන 8කි. </li>
            <li className="mt-2">● JPEG හෝ PNG ආකාරයට නිර්මාණ ඉදිරිපත් කළ හැකිය. </li>
            <li className="mt-2">● සමාජයට වැදගත් පණිවිඩියක් ලබාදෙන අයුරින් නිර්මාණ ඉදිරිපත් කිරීමට තරඟකරුට නිදහස ඇත. </li>
            <li className="mt-2">● දේශපාලනය හා ආගම්වාදය අන්තර්ගත වන කිසිදු නිර්මාණයක් විනිශ්චය සඳහා ඉදිරිපත්කරනු නොලබන අතර ඒවා තරඟයෙන් ඉවත් කරනු ලැබේ. </li>
            <li className="mt-2">● තම නිර්මාණය මගින් හැඟවෙන පණිවිඩය වචන 50 කට නොවැඩි වන අයුරින් කෙටි හැඳින්වීමක් චාf ගොනුවක් ලෙස ඉදිරිපත් කළ යුතුය. </li>
            <li className="mt-2">
              ● ඉදිරිපත් කරන සියළුම නිර්මාණ තුල කිසිදු ආකාරයේ ලාංඡන(logo), කතෘ අයිතිය සම්බන්ධ සලකුණු (copyright marks), අනන්‍යතාවය හඟවන සළකුණු (identifying
              marks), මායිම් (borders) හෝ වෙනත් කිසිදු ආකාරයේ සළකුණු නොතිබිය යුතුය.
            </li>
            <li className="mt-2">● PSD ගොනුව (PSD File) ඉදිරිපත් කිරීම අනිවාර්ය වේ. </li>
            <li className="mt-2">● නිර්මාණාත්මකම හා ජනප්‍රියතම නිර්මාණය ලෙස තරඟ කාණ්ඩ දෙකකින් තරඟය සමන්විත වන අතර සියළුම නිර්මාණ තරඟ කාණ්ඩ දෙකට අඩංගු වේ. </li>
            <li className="mt-2">
              ● නිර්මාණාත්මකම නිර්මාණය විනිශ්චය මණ්ඩලය මඟින් විනිශ්චය කරන අතර ජනප්‍රියම නිර්මාණය සඳහා නිර්මාණයට හිමිවන facebook මනාප (likes) මඟින් තෝරාගනු ලැබේ.
            </li>
            <li className="mt-2">● විනිශ්චය මණ්ඩලයේ තීරණය අවසාන තීරණය වේ. </li>
            <li className="mt-2">
              ● මුල් ඡායාරූප තනි ගොනුවකත් හා අවසන් නිර්මාණය වෙනත් තනි ගොනුවකත් හා කෙටි හැඳින්වීම වෙනත් තනි ගොනුවකත් ලෙස පැහැදිලිව සඳහන් කර ඉහත සඳහන් සියලුම ගොනු
              තනි zip / rar ගොනුවක් ලෙස උඩුගත කල යුතුය.
            </li>
            <li className="mt-2">
              ● උඩුගත කිරීමට ප්‍රථමව අපගෙ වෙබ් අඩවි (https://rusara2023.github.io/official/) ඇති ගූගල් ෆෝරමය පුරවා ඒ හරහා zip ගොනුව උඩුගත කල යුතුය.
            </li>
          </ul>
        </section>
        <br />
        <a href={PDF} download="Photo Manipulation Competition Rules" target="_blank" rel="noreferrer" className="bg-white text-black p-2 rounded my-4">
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
