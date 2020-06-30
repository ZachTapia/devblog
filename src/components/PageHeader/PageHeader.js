import React from "react"
import styles from "./PageHeader.module.scss"

const PageHeader = ({ headerTitle, headerContent }) => {
  return (
    <div className={styles.page__header}>
      {headerTitle}

      <div className={styles.page__header__content}>{headerContent}</div>
    </div>
  )
}

export default PageHeader
