import React from "react"
import Layout from "../components/Layout/Layout"
import PageHeader from "../components/PageHeader/PageHeader"
import ProjectCard from "../components/ProjectCard/ProjectCard"

const Projects = () => {
  const headerContent =
    "Here are some examples of my work. I'm always working on something new and learning new technologies. I try my best to support my projects with continuous development, implementing new features or improving existing ones."

  return (
    <Layout>
      <PageHeader headerTitle="Projects" headerContent={headerContent} />
      <ProjectCard
        projectTitle="Pomodo-It"
        liveLink="https://pomodoit.now.sh/"
        githubLink="https://github.com/ZachTapia/pomodoro"
      />
    </Layout>
  )
}

export default Projects
