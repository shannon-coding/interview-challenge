import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

class ColorLandingTemplate extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext

    const colors = this.props.data.allMdx.edges.map(color => {
      return (
        <div className="column is-3 is-10-mobile" key={color.node.id}>
          <div className="box">
            <div className="card-image">
              <Link to={color.node.fields.slug}>
                <figure
                  className="image is-2by1"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: `#${color.node.frontmatter.color}`,
                  }}
                ></figure>
              </Link>
            </div>
            <div className="card-content">
              <div className="content">
                <Link to={color.node.fields.slug}>
                  <p className="is-size-4">#{color.node.frontmatter.color}</p>
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
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Link
              key={`pagination-number${i + 1}`}
              to={`/${i === 0 ? "" : i + 1}`}
            >
              <p
                className={`${
                  i + 1 === currentPage ? "is-active-link" : ""
                } is-size-2`}
              >
                {i + 1}
              </p>
            </Link>
          ))}
        </div>
      </Layout>
    )
  }
}

export default ColorLandingTemplate

export const pageQuery = graphql`
  query PaginationQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___fullTitle }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            fullTitle
            color
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`
