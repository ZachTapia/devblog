import React from "react"
import Layout from "../components/Layout/Layout"
import PageHeader from "../components/PageHeader/PageHeader"

const Articles = () => {
  const headerContent = "Here are some things that I'd like share with you"

  return (
    <Layout>
      <PageHeader headerTitle="Articles" headerContent={headerContent} />
    </Layout>
  )
}

export default Articles
