import { Link } from "gatsby"
import React from "react"

import { StaticQuery, graphql } from "gatsby"
import RandomColor from "../components/RandomColor"

function LeftNavbar() {
  return (
    <StaticQuery
      query={graphql`
        query NavQuery {
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
      `}
      render={data => (
        <div
          className="container"
          style={{
            paddingTop: "5vh",
            backgroundColor: `rgb(214,216,216)`,
            minHeight: "90vh",
            boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
          }}
        >
          <RandomColor data={data} />
          <div className="container is-fluid" style={{ paddingTop: "2vh" }}>
            <div>
              <Link to="common-colors/red">
                <p className="is-size-4">Red</p>
              </Link>
            </div>
            <div>
              <Link to="common-colors/orange">
                <p className="is-size-4">Orange</p>
              </Link>
            </div>
            <div>
              <Link to="common-colors/yellow">
                <p className="is-size-4">Yellow</p>
              </Link>
            </div>
            <div>
              <Link to="common-colors/green">
                <p className="is-size-4">Green</p>
              </Link>
            </div>
            <div>
              <Link to="common-colors/blue">
                <p className="is-size-4">Blue</p>
              </Link>
            </div>
            <div>
              <Link to="common-colors/purple">
                <p className="is-size-4">Purple</p>
              </Link>
            </div>
            <div>
              <Link to="common-colors/brown">
                <p className="is-size-4">Brown</p>
              </Link>
            </div>
            <div>
              <Link to="common-colors/gray">
                <p className="is-size-4">Gray</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default LeftNavbar
