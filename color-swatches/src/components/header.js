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
        paddingLeft: "2.5vw",
        paddingRight: "2.5vw",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <input type="text" placeholder="Search" className="input" />
      </div>
    </div>
  </header>
)

export default Header
