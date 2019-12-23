import React from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ data }) {
  const colors = data.allMdx.edges.map(color => {
    return (
      <div className="column is-3 is-10-mobile" key={color.node.id}>
        <div className="box">
          <div className="card-image">
            <figure
              className="image is-2by1"
              style={{
                borderRadius: "5px",
                backgroundColor: `#${color.node.frontmatter.color}`,
              }}
            ></figure>
          </div>
          <div className="card-content">
            <div className="content">
              <Link to={color.node.fields.slug}>
                <p>#{color.node.frontmatter.color}</p>
              </Link>
            </div>
          </div>
        </div>
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
    allMdx(sort: { fields: frontmatter___color }) {
      edges {
        node {
          id
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
