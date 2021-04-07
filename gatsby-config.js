module.exports = {
  siteMetadata: {
    title: `gatsby-datocms-sandbox`,
    description: `Sandbox to try out Gatsby and Dato CMS features.`,
    author: `chris.worman@pelacase.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: '9dd5819111086fbe9667fa39fb9e40',
        localeFallbacks: {
          'en-US': ['en'],
        },
      }
    },
  ],
}
