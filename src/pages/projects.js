import React from "react"
import Layout from "../components/Layout/Layout"
import PageHeader from "../components/PageHeader/PageHeader"
import ProjectList from "../components/ProjectList/ProjectList"

const Projects = () => {
  const headerContent =
    "Here are some examples of my work. I'm always working on something new and learning new technologies. I try my best to support my projects with continuous development, implementing new features or improving existing ones."

  return (
    <Layout>
      <PageHeader headerTitle="Projects" headerContent={headerContent} />

      <ProjectList />
    </Layout>
  )
}

export default Projects
