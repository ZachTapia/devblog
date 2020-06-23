import React from "react"

import "./Layout.scss"
import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
