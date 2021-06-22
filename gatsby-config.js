module.exports = {
  siteMetadata: {
    title: `gatsby-datocms-sandbox`,
    description: `Sandbox to try out Gatsby and Dato CMS features.`,
    author: `chris.worman@pelacase.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: 'b88e2a9b20c908a76ae2f0a11c3cb5',
        localeFallbacks: {
          'en-US': ['en'],
        },
      }
    },
  ],
}
