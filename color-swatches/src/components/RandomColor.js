import { Link } from "gatsby"
import React from "react"

function RandomColor(props) {
  const data = props.data
  return (
    <div className="container is-fluid">
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
          className="button is-size-4"
          style={{ fontWeight: "bold" }}
        />
      </Link>
    </div>
  )
}

export default RandomColor
