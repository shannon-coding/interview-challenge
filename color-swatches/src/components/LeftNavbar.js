import { Link } from "gatsby"
import React from "react"

const LeftNavbar = () => (
  <div
    style={{
      paddingTop: "10vh",
      backgroundColor: "gray",
      minHeight: "90vh",
      minWidth: "25vw",
    }}
  >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="button"
        value="Random Color"
        type="button"
        style={{ borderRadius: "10px" }}
      />
    </div>
    <div>
      <p>Red</p>
    </div>
    <div>
      <p>Orange</p>
    </div>
    <div>
      <p>Yellow</p>
    </div>
    <div>
      <p>Green</p>
    </div>
    <div>
      <p>Blue</p>
    </div>
    <div>
      <p>Purple</p>
    </div>
    <div>
      <p>Brown</p>
    </div>
    <div>
      <p>Gray</p>
    </div>
  </div>
)

export default LeftNavbar
