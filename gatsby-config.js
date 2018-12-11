module.exports = {
  siteMetadata: {
    title: 'Two Lanterns',
  },

  plugins: 
  [
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1120706,
        sv: 6
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-130781167-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths

      },
    },
]

};
