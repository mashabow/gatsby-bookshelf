const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type == 'SampleCsv') {
    createNodeField({
      node,
      name: 'slug',
      value: `books/${node.title}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSampleCsv {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allSampleCsv.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/book.js`),
          context: {
            slug: node.fields.slug,
          },
        });
      })
      resolve();
    });
  });
};
