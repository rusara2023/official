/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix:"/ruusara.github.io",
  siteMetadata: {
    title: `Ruusara`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};