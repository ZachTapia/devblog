import React from "react"
import footerStyles from "./Footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <FontAwesomeIcon className={footerStyles.footer__icon} icon={faGithub} />
      <FontAwesomeIcon className={footerStyles.footer__icon} icon={faLinkedin} />
    </div>
  )
}

export default Footer
