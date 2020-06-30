import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className={navbarStyles.navbar}>
          <Link className={navbarStyles.navItem} to="/">
            <li className={navbarStyles.bordered}>ZT</li>
          </Link>
          <Link
            className={navbarStyles.navItem}
            id={navbarStyles.projects}
            to="/projects"
          >
            <li>Projects</li>
          </Link>
          <Link className={navbarStyles.navItem} to="/articles">
            <li>Articles</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
