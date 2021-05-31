import * as React from "react"
import { Link } from "gatsby"
import { list, link } from "./layout.module.css"

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

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
