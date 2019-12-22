import React from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ data }) {
  const colors = data.allMdx.edges.map(color => {
    return (
      <div>
        <p>{color.node.frontmatter.fullTitle}</p>
        <Link to={color.node.fields.slug}>
          <p>{color.node.frontmatter.color}</p>
        </Link>
      </div>
    )
  })
  return (
    <Layout>
      <SEO title="Home" />
      {colors}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ColorQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            fullTitle
            color
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
