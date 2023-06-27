import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import MyGallery from "../components/Gallery";
import MainTitle from "../components/Title";
const IndexPage = () => {
  return (
    <HomeLayout>
      <main className="">
        <MainTitle title="Gallery" />
        <MyGallery />
      </main>
    </HomeLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
