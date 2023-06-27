/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/official",
  siteMetadata: {
    siteMetadata: {
      title: `Ruusara 2023`,
      description: `Roosara-2023, The Digital Art Competition” is organized for the third consecutive time as one of the events which is organized along with
                    “Let My Country Awake”, The Students’ Festival of Literature organized by the Literary Subcommittee of University of Peradeniya. This
                    competition consists of three main categories which are Dubbing, Photo Manipulation, and Character Creation.`,

      // image: `./src/images/icon.png`,
      siteUrl: `https://rusara2023.github.io/official/`,
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
