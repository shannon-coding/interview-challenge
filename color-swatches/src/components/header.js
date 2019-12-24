import { Link } from "gatsby"
import React from "react"

import logo from "../images/logo-symbol.svg"

const Header = () => (
  <header>
    <div
      style={{
        backgroundColor: `rgb(54,60,60)`,
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "2.5vw",
        paddingRight: "2.5vw",
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
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
