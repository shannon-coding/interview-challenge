/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import LeftNavbar from "./LeftNavbar"
import "../static/css/Site.sass"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="columns">
        <div className="column is-2-desktop is-hidden-tablet-only is-hidden-mobile ">
          <LeftNavbar />
        </div>
        <div
          className="column is-offset-1-tablet-only"
          style={{ paddingTop: "2.5vh", paddingRight: "2vw" }}
        >
          <div className="columns  is-multiline is-centered">{children}</div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
