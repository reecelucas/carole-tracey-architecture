exports.onCreateWebpackConfig = ({ actions }) => {
  // Fixes `dependency was not found` issue with the `dotenv` package
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  });
};
