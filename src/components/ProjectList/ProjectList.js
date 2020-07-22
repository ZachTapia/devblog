import React from "react"
import styles from "./ProjectList.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./ProjectCard/ProjectCard"

const ProjectList = () => {
  const allImages = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  return (
    <div className={styles.projectList}>
      <ProjectCard
        projectTitle="PomoDo-It"
        liveLink="https://pomodoit.now.sh/"
        githubLink="https://github.com/ZachTapia/pomodoro"
        cardBack="PomoDo-it is a productivity timer built using React.js (Hooks) and
        Next.js. PomoDo-it implements the Pomodoro Technique to boost
        productivity and focus. When faced with a large task or series of
        tasks, PomoDo-it breaks down the work into short focused sprints
        (called 'pomodoros')."
        image={allImages.allImageSharp.nodes.find(node =>
          node.fluid.originalName === "pomodoit.png" ? node : null
        )}
      />
      <ProjectCard
        projectTitle="Christine Tapia Real Estate"
        liveLink="https://christinetapia.com"
        githubLink="https://github.com/ZachTapia/ctrealestate"
        cardBack="Christine Tapia Real Estate is a website created using React.js and Gatsby. This was a special project for me, as it was a business website for my mother. I've always known I wanted to make her one, and here it finally is! Check it out if you have time!"
        image={allImages.allImageSharp.nodes.find(node =>
          node.fluid.originalName === "christine.png" ? node : null
        )}
      />
    </div>
  )
}

export default ProjectList
