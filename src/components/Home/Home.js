import React from "react"
import homeStyles from "./Home.module.scss"
import Developer from "../../images/javascript.svg"

const Home = () => {
  return (
    <>
      <div className={homeStyles.heading}>
        <div className={homeStyles.heading__greeting}>Hey, I'm Zach,</div>a{" "}
        <span className={homeStyles.heading__greetingBold}>Web Developer</span>
      </div>

      <div className={homeStyles.home__content}>
        <img
          className={homeStyles.home__content__developer}
          src={Developer}
          alt="javascript developer"
        />
        <div className={homeStyles.home__content__about}>
          <div className={homeStyles.home__content__about__header}>
            About Me
          </div>
          <div className={homeStyles.home__content__about__content}>
            I'm a recent Computer Science graduate and web developer, living in
            Southern California. I have experience building applications using
            JavaScript frameworks and libraries such as React.js, Next.js and
            Gatsby.
          </div>
          <div className={homeStyles.home__content__about__content}>
            I am currently building new applications to demonstrate my skills
            and land my first full-time developer job. I enjoy teaching others
            and have created articles to share some of the knowledge I've picked
            up along the way!
          </div>

          <div className={homeStyles.home__content__about__content}>
            When I'm not programming, I enjoy spending time with my family,
            playing guitar, and fishing with my wife.
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
