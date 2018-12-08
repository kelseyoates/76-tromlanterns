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
]

};
