import React from "react"
import projectsHeaderStyles from "./ProjectsHeader.module.scss"

const ProjectsHeader = () => {
  return (
    <div className={projectsHeaderStyles.projects__header}>
      Projects
      <div className={projectsHeaderStyles.projects__header__content}>
        Here are some examples of my work. I'm always working on something new
        and learning new technologies. I try my best to support my projects with
        continuous development, implementing new features or improving existing
        ones.
      </div>
    </div>
  )
}

export default ProjectsHeader
