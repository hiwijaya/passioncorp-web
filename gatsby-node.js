/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.createPages = async ({ actions, graphql, reporter }) => {

    const { createPage } = actions;
    const postTemplate = path.resolve('src/templates/post-template.js');

    const results = await graphql(`
    {
        posts: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]} limit: 1000) {
            edges {
                node {
                    frontmatter {
                        slug
                    }
                }
            }
        }
        tags: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
            }
        }
    }
  `);

    // Handle errors
    if (results.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const posts = results.data.posts.edges;
    posts.forEach(({ node }) => {
        createPage({
            path: `/news${node.frontmatter.slug}`,
            component: postTemplate,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug,
            },
        });
    });
    
}
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}