/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title:"Test",
    siteUrl: `https://www.yourdomain.tld`,
    human: {
      fullName: "Nguyen Dinh Trung",
      age: 15,
      address:"Ho Chi Minh City, Viet Nam",
      hobby:"Watch movies, play chess, soccer"


    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      }
    },
  ],
};
