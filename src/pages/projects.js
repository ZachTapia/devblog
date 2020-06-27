import React from "react"
import Layout from "../components/Layout/Layout"
import ProjectsHeader from "../components/ProjectsHeader/ProjectsHeader"
import ProjectCard from "../components/ProjectCard/ProjectCard"

const Projects = () => {
  return (
    <Layout>
      <ProjectsHeader />
      <ProjectCard
        projectTitle="Pomodo-It"
        liveLink="https://pomodoit.now.sh/"
        githubLink="https://github.com/ZachTapia/pomodoro"
      />
    </Layout>
  )
}

export default Projects
