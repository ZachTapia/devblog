import React from "react"
import projectCardStyles from "./ProjectCard.module.scss"
import Pomodoit from "../../images/pomodoro.gif"

const ProjectCard = ({ projectTitle }) => {
  return (
    <div className={projectCardStyles.projectCard}>
      <div className={projectCardStyles.projectCard__header}>
        <div className={projectCardStyles.projectCard__header__title}>
          {projectTitle}
        </div>
      </div>
      <div className={projectCardStyles.projectCard__body}>
        <img src={Pomodoit} alt="pomodoit preview" />
        <div className={projectCardStyles.projectCard__body__content}>
          <div className={projectCardStyles.projectCard__body__content__item}>
            React Next.js
          </div>
          <div className={projectCardStyles.projectCard__body__content__item}>
            Github Live
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
