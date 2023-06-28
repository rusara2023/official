import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import IMG2 from "../images/home_2.png";
import { AppContext } from "../context/context";

import MainTitle from "../components/Title";
const IndexPage = () => {
  return (
    <AppContext.Consumer>
      {({ isEng, handleLan }) => (
        <HomeLayout>
          <main>
            <section>
              <MainTitle title="Register" />

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd33zSxNoasyEC3WRNGLXTJoUbH3A5h4iTrujrgcJoeUDalFQ/viewform?embedded=true"
                // height="2250"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                className="mx-auto w-full h-max min-h-[2250px]"
              >
                Loading…
              </iframe>
            </section>
          </main>
        </HomeLayout>
      )}
    </AppContext.Consumer>
  );
};

export default IndexPage;
