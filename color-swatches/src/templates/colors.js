import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class CodePostTemplate extends React.Component {
  render() {
    {
      /* Props come from the pageQuery at the bottom of the file. */
    }
    const color = this.props.data.mdx

    return (
      <Layout>
        <SEO title={color.frontmatter.fullTitle} />
        <h1 className="has-text-centered title is-1">
          {color.frontmatter.fullTitle}
        </h1>
        <div
          style={{
            height: "10%",
            width: "25vw",
            backgroundColor: `#${color.frontmatter.color}`,
          }}
        ></div>
        <br />
        <br />
        <div className="is-centered">
          <p className="has-text-centered">
            <h3 className="subtitle is-3 has-text-link">
              <Link to="/">Clear</Link>
            </h3>
          </p>
        </div>
      </Layout>
    )
  }
}

export default CodePostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        fullTitle
        color
      }
    }
  }
`
