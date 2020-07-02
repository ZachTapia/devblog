import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import styles from "./Article.module.scss"

// $slug is coming from the context object we set up in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Article = props => {
  return (
    <Layout>
      <div className={styles.article__title}>
        {props.data.markdownRemark.frontmatter.title}
      </div>
      <div className={styles.article__author}>By: Zach Tapia</div>
      <div className={styles.article__date}>
        {props.data.markdownRemark.frontmatter.date}
      </div>
      <div
        className={styles.article__content}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Article
