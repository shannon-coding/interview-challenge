const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const colorPage = path.resolve(`./src/templates/colors.js`)
  return graphql(
    `
      {
        colors: allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create project post pages
    result.data.colors.edges.forEach((color, index) => {
      const previous = index === 0 ? null : result.data.colors[index - 1]
      const next =
        index === result.data.colors.length - 1
          ? null
          : result.data.colors[index - 1]

      createPage({
        path: color.node.fields.slug,
        component: colorPage,
        context: {
          slug: color.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
