import React from "react"
import "./Layout.scss"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className="all">
      <Navbar />
      <div className="content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
