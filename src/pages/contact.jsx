import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";

import MainTitle from "../components/Title";
const IndexPage = () => {
  return (
    <HomeLayout>
      <main>
        <section>
          <MainTitle title="Contact Us" />
          {/* <p className=" text-white text-justify text-lg font-round mt-24">
            “Roosara-2023, The Digital Art Competition” is organized for the second consecutive time as one of the events which is organized along with “Let My
            Country Awake”, The Students’ Festival of Literature organized by the Literary Subcommittee of University of Peradeniya. This competition consists
            of three main categories which are Dubbing, Photo Manipulation, and Comic Character Creation.
          </p> */}
        </section>
      </main>
    </HomeLayout>
  );
};

export default IndexPage;
