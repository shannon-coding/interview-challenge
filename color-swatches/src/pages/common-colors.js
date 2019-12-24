import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function CommonColors(props) {
  const color = props["*"]

  return (
    <Layout>
      <SEO
        title={
          "Common Colors - " + color.charAt(0).toUpperCase() + color.slice(1)
        }
      />
      <div className="column is-8 is-12-mobile is-offset-2">
        <div className="box" style={{ border: "solid", borderWidth: "1px" }}>
          <div className="card-image">
            <figure
              className="image is-16by9"
              style={{
                borderRadius: "5px",
                backgroundColor: `${color}`,
              }}
            ></figure>
          </div>
          <div className="card-content">
            <div className="content is-size-2">
              {color.charAt(0).toUpperCase() + color.slice(1)}
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

export default CommonColors
