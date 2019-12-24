import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class CodePostTemplate extends React.Component {
  render() {
    const color = this.props.data.mdx

    return (
      <Layout>
        <SEO title={color.frontmatter.fullTitle} />
        <div className="column is-8 is-12-mobile is-offset-2">
          <div className="box" style={{ border: "solid", borderWidth: "1px" }}>
            <div className="card-image">
              <figure
                className="image is-16by9"
                style={{
                  borderRadius: "5px",
                  backgroundColor: `#${color.frontmatter.color}`,
                }}
              ></figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="is-size-2">#{color.frontmatter.color}</p>
              </div>
            </div>
          </div>
          <div className="has-text-centered">
            <Link to="/">
              <input
                type="button"
                className="button is-size-3"
                value="Back"
                style={{ fontWeight: "bold" }}
              />
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CodePostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        fullTitle
        color
      }
    }
  }
`
