import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";

import MainTitle from "../components/Title";
const IndexPage = () => {
  return (
      <AppContext.Consumer>
     {({isEng, handleLan}) => (
    <HomeLayout>
      <main>
        <section>
          <MainTitle title="Contact Us" />
          <div className="grid grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <p className=" text-white text-justify text-lg font-round col-span-2 p-2 ">Official Email</p>
            <p className=" text-white text-justify text-lg font-round p-2 col-span-2 lg:col-span-1">ruusara2023@gmail.com</p>
            <p className=" text-white text-justify text-lg font-round col-span-2 lg:col-span-1 p-2 bg-gray-900">{isEng?"Rashmi Virajitha":"රශ්මි විරාජිත"}</p>
            <p className=" text-white text-justify text-lg font-round p-2 bg-gray-900">076 916 2111</p>
            <p className=" text-white text-justify text-lg font-round p-2 bg-gray-900">virajithagar101@gmail.com</p>
            <p className=" text-white text-justify text-lg font-round col-span-2 lg:col-span-1 p-2">{isEng?"Pethum Dilhara":"පෙතුම් දිල්හාර"}</p>
            <p className=" text-white text-justify text-lg font-round p-2">076 976 5143</p>
            <p className=" text-white text-justify text-lg font-round p-2">pethum22551@gmail.com</p>
            <p className=" text-white text-justify text-lg font-round col-span-2 lg:col-span-1 p-2 bg-gray-900">{isEng?"Nimesha Somathilaka":"නිමේශා සෝමතිලක"}</p>
            <p className=" text-white text-justify text-lg font-round p-2 bg-gray-900">071 785 2409</p>
            <p className=" text-white text-justify text-lg font-round p-2 bg-gray-900">nimeshasomathilaka@gmail.com</p>
            <p className=" text-white text-justify text-lg font-round col-span-2 lg:col-span-1 p-2">{isEng?"Deshara Gamage":"දෙෂාරා ගමගේ"}</p>
            <p className=" text-white text-justify text-lg font-round p-2">071 951 9419</p>
            <p className=" text-white text-justify text-lg font-round p-2">desharadoyuni22@gmail.com</p>
          </div>
        </section>
      </main>
    </HomeLayout>)}
    </AppContext.Consumer>
  );
};

export default IndexPage;
