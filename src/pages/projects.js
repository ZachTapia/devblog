import React from "react"
import Layout from "../components/Layout/Layout"
import ProjectsHeader from "../components/ProjectsHeader/ProjectsHeader"
import ProjectCard from "../components/ProjectCard/ProjectCard"

const Projects = () => {
  return (
    <Layout>
      <ProjectsHeader />
      <ProjectCard projectTitle="Pomodo-It" />
    </Layout>
  )
}

export default Projects
