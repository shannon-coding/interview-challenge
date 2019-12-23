import React from "react"
import Layout from "../components/layout"
import { SEO } from "gatsby"

class ColorLanding extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return <div>Hello</div>
  }
}

export const pageQuery = graphql`
  query PaginationQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: frontmatter___color }, limit: $limit, skip: $skip) {
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
