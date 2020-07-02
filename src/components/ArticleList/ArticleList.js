import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./ArticleList.module.scss"
import ArticleCard from "../ArticleCard/ArticleCard"

const ArticleList = () => {
  const articles = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            timeToRead
            excerpt(pruneLength: 120)
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div className={styles.articleList}>
      {articles.allMarkdownRemark.edges.map(edge => (
        <>
          <ArticleCard
            key={edge.node.frontmatter.title}
            articleTitle={edge.node.frontmatter.title}
            datePosted={edge.node.frontmatter.date}
            articlePreview={edge.node.excerpt}
            timeToRead={edge.node.timeToRead}
            link={edge.node.fields.slug}
          />
        </>
      ))}
    </div>
  )
}

export default ArticleList
