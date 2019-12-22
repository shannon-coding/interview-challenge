import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo-symbol.svg"

const Header = () => (
  <header>
    <div
      style={{
        backgroundColor: "black",
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <input
        type="text"
        placeholder="Search"
        style={{ borderRadius: "10px", padding: "5px 10px 5px 15px" }}
      />
    </div>
  </header>
)

export default Header
