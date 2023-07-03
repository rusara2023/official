import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import MyGallery from "../components/Gallery";
import MainTitle from "../components/Title";
import Gallery2022 from "../components/Gallery2022";
import Gallery2021 from "../components/Gallery2021";
const IndexPage = () => {
  return (
    <HomeLayout>
      <main className="">
        <MainTitle title="Gallery" />
        <MyGallery />
        <Gallery2022/>
        <Gallery2021/>
      </main>
    </HomeLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
