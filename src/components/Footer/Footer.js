import React from "react"
import footerStyles from "./Footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <a href="https://github.com/ZachTapia" target="__blank">
        <FontAwesomeIcon
          className={footerStyles.footer__icon}
          icon={faGithub}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/zach-tapia-a01ab918b/"
        target="__blank"
      >
        <FontAwesomeIcon
          className={footerStyles.footer__icon}
          icon={faLinkedin}
        />
      </a>
    </div>
  )
}

export default Footer
