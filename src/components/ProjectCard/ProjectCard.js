import React, { useState } from "react"
import projectCardStyles from "./ProjectCard.module.scss"
import Pomodoit from "../../images/pomodoro.gif"

const ProjectCard = ({ projectTitle, liveLink, githubLink }) => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlip = () => {
    setFlipped(prevState => !prevState)
  }

  console.log(flipped)

  return (
    <div className={projectCardStyles.projectCardContainer}>
      <div
        className={
          flipped
            ? projectCardStyles.projectCardFlipped
            : projectCardStyles.projectCard
        }
      >
        <div className={projectCardStyles.projectCardFront}>
          <img
            className={projectCardStyles.projectCard__image}
            src={Pomodoit}
            alt="pomodoro project"
          />
          <div className={projectCardStyles.projectCard__title}>
            {projectTitle}
          </div>
          <div className={projectCardStyles.projectCard__divider}></div>
          <div className={projectCardStyles.projectCard__content}>
            <div className={projectCardStyles.projectCard__content__item}>
              <a href={liveLink} target="__blank">
                Live
              </a>
            </div>
            <div className={projectCardStyles.projectCard__content__item}>
              <a href={githubLink} target="__blank">
                Github
              </a>
            </div>
            <div
              className={projectCardStyles.projectCard__content__item}
              onClick={toggleFlip}
            >
              Details
            </div>
          </div>
        </div>
        <div className={projectCardStyles.projectCardBack} onClick={toggleFlip}>
          PomoDo-it is a productivity timer built using React.js (Hooks) and
          Next.js. PomoDo-it implements the Pomodoro Technique to boost
          productivity and focus. When faced with a large task or series of
          tasks, PomoDo-it breaks down the work into short focused sprints
          (called "pomodoros").
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
