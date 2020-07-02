/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

//  This runs when a new node is created, attaches slug to every md node
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Only effect markdown nodes
  if (node.internal.type === "MarkdownRemark") {
    const markdownSlug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node: node,
      name: "slug",
      value: markdownSlug,
    })
  }
}

// This creates urls for every article
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get path to template
  const articleTemplatePath = path.resolve("./src/templates/article/article.js")

  // Get markdown data, slugs
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Create page for each post
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: articleTemplatePath,
      path: `/articles/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
