import React from "react"
import Layout from "../components/Layout/Layout"
import PageHeader from "../components/PageHeader/PageHeader"
import ArticleList from "../components/ArticleList/ArticleList"

const Articles = () => {
  const headerContent = ""

  return (
    <Layout>
      <PageHeader headerTitle="Articles" headerContent={headerContent} />
      <ArticleList />
    </Layout>
  )
}

export default Articles
