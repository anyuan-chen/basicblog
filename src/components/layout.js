import * as React from "react"
import { Link } from "gatsby"
import { list, link, footer } from "./layout.module.css"
import AutoTyper from "./AutoTyper"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (header = (
    <div>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <nav>
        <ul className={list}>
          <li>
            <Link to="/" className={link}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/extras" className={link}>
              Extras
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  ))
  let footerText = ["GraphQL", "React", "CSS"]
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <div className={footer}> 
        <h6 style={{ display: "inline" }}>
          Built With {` `}
          <AutoTyper dataText={footerText}></AutoTyper>
        </h6>
      </div>
    </div>
  )
}

export default Layout
