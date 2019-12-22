import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"


const Header = ({ siteTitle , data}) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      boxShadow: "0px 1px 0px 0px #c9c9c9",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0, 
 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div
            name="Logo Container"
             style={{
            // margin: `0 auto`,
            maxWidth: 150,
            padding: 10,
            height: 60
          }}>
            <Logo />

          </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
