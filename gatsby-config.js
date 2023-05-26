/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    human: {
      fullName: "Nguyen Dinh Trung",
      age: 15,
      address:"Ho Chi Minh City, Viet Nam",
      hobby:"Watch movies, play chess, soccer"


    },
  },
  plugins: [
    // "gatsby-source-filesystem",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
