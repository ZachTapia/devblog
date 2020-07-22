import React, { useState } from "react"
import projectCardStyles from "./ProjectCard.module.scss"
import Img from "gatsby-image"

const ProjectCard = ({
  projectTitle,
  liveLink,
  githubLink,
  cardBack,
  image,
}) => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlip = () => {
    setFlipped(prevState => !prevState)
  }

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
          <Img
            className={projectCardStyles.projectCard__image}
            fluid={image.fluid}
            alt="project image"
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
          {cardBack}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
