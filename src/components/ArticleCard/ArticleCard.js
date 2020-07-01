import React from "react"
import { Link } from "gatsby"
import styles from "./ArticleCard.module.scss"

const ArticleCard = ({
  articleTitle,
  datePosted,
  articlePreview,
  timeToRead,
  link,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/articles/${link}`}>
        <div className={styles.border}>
          <div className={styles.articleCard}>
            <div className={styles.articleCard__title}>{articleTitle}</div>
            <div className={styles.articleCard__author}>By: Zach Tapia</div>
            <div className={styles.articleCard__date}>{datePosted}</div>
            <div
              className={styles.articleCard__time}
            >{`${timeToRead} min read`}</div>
            <div className={styles.articleCard__preview}>{articlePreview}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
