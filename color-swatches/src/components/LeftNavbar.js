import { Link } from "gatsby"
import React from "react"

import { Router } from "@reach/router"

import { StaticQuery, graphql } from "gatsby"

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
          style={{
            paddingTop: "10vh",
            backgroundColor: "gray",
            minHeight: "90vh",
          }}
        >
          <div className="has-text-centered">
            <Link
              to={
                data.allMdx.edges[
                  Math.floor(Math.random() * data.allMdx.edges.length)
                ].node.fields.slug
              }
            >
              <input
                type="button"
                value="Random Color"
                type="button"
                className="button"
                style={{ fontWeight: "bold" }}
              />
            </Link>
          </div>
          <div className="has-text-centered">
            <h1 className="is-size-3" style={{ textDecoration: "underline" }}>
              Common Colors
            </h1>
          </div>
          <div>
            <Link to="common-colors/red">
              <p className="is-size-4 is-info">Red</p>
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
      )}
    />
  )
}

export default LeftNavbar
