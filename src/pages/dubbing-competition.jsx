import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";
import E1 from "../images/e4.jpg";
import MainTitle from "../components/Title";
import Judges from "../components/judges";

const IndexPage = () => {
  return (
    <HomeLayout>
      <img src={E1} alt="Dubbing Competition" className=" w-full aspect-video max-h-[50vh] object-cover object-center" />
      <main>
        <section className="text-white text-lg font-round">
          <MainTitle title="Dubbing Competition" />

          <h4 className="text-3xl text-white underline">තරඟ නීති සහ රෙගුලාසි</h4>
          <p className=" text-white text-justify text-lg font-round mt-8">
            තරඟයට සහභාගි වන සියළු තරඟකරුවන් තරඟ නීති රීතී සියල්ල හොඳින් කියවා අවබෝධ කරගත යුතුය.
          </p>
          <ul className="mt-4 ml-4">
            <li className="mt-2">
              ● අපගේ වෙබ් අඩවියෙහි පළකර ඇති එක් එක් කාණ්ඩ ඔස්සේ වීඩියෝ එකක් තෝරගෙන එක් වීඩියෝව බැගින් කාණ්ඩ දෙකෙන් වීඩියෝ clips 2ක් සඳහා හඬකැවීම් කළ යුතුය.
            </li>
            <li className="mt-2">● විඩියෝ පටයන් සංස්කරණය හෝ වෙනත් වෙනස්කම් වලට ලක් කිරීම නොකල යුතුය.</li>
            <li className="mt-2">● හඬ කැවීම් සඳහා පෙර දෙබස් (copyright content) භාවිතා කර තිබුණහොත් තරගයෙන් ඉවත් කරනු ලැබේ.</li>
            <li className="mt-2">● තරඟකරුවන් තම නිර්මාණ නියමිත දිනට පෙර මාර්ගගත ක්‍රමයෙන් ඉදිරිපත්කල යුතුය.</li>
            <li className="mt-2">● එක් කණ්ඩායමකට ඉදිරිපත් කල හැකිවන්නේ නිර්මාණ 2ක් පමණි.</li>
            <li className="mt-2">● එක් කණ්ඩායමකට සම්බන්ධ විය හැකි උපරිම සාමාජිකයන් ගණන 5කි.</li>
            <li className="mt-2">● දේශපාලනික මඩ ගැසීම්ල ජාතිවාදි දෙබස් නැති විය යුතුයි. එවැනි දෙබස් ඇතුළත් වේනම් තරඟයෙන් ඉවත් කරනු ලැබේ.</li>
            <li className="mt-2">● අසභ්‍ය වචන භාවිතා නොකල යුතුයි. එවැනි දෙබස් ඇතුළත් වේනම් තරඟයෙන් ඉවත් කරනු ලැබේ. </li>
            <li className="mt-2">● Upload කරනු ලබන වීඩියෝ size එක 500MB ට අඩුවිය යුතුය. </li>
            <li className="mt-2">● වීඩියෝ mp4 ආකාරයෙන් ඉදිරිපත් කල යුතයු . 1920x1080 හැර කැමති frame size එකක් භාවිතා කලහැක.</li>
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
            <li className="mt-2">● අවසන් නිර්මාණය තනි zip / rar ගොනුවක් ලෙස උඩුගත කල යුතුය.</li>
            <li className="mt-2">
              ● උඩුගත කිරීමට ප්‍රථමව අපගේ වෙබ් අඩවිය (https://rusara2023.github.io/official/) ඇති ගූගල් ෆෝරමය පුරවා ඒ හරහා zip ගොනුව උඩුගත කල යුතුය.
            </li>
          </ul>
        </section>
        <Judges />
      </main>
    </HomeLayout>
  );
};

export default IndexPage;
