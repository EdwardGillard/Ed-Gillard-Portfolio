import React from 'react'
import Carousel from '../components/Carousel'
import { Swipeable } from 'react-swipeable'

function Projects() {
  const [projects] = React.useState([
    {
      title: 'Project 4 - Blind Dates',
      github: 'https://github.com/EdwardGillard/SEI-Project-4',
      deployedLink: 'https://blind-dates.herokuapp.com/',
      deployedName: 'Blind Dates',
      display: 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592587314/portfolio/DesktopDashboard_arjxa2.png',
      media: ['https://res.cloudinary.com/dsz79ulhu/image/upload/v1592587314/portfolio/DesktopDashboard_arjxa2.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592587314/portfolio/ShowUserProfileIpad_faglmr.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592587314/portfolio/FindLoveMobile_ridjdp.png'],
      description: 'A solo, full stack dating app built in 8 days using Python & Django on backend and React Hooks on front end. I built this app mobile first then used React Swipeable to create a tinder style app. Deployed using Heroku.',
      technologies: ['Python', 'Django', 'React (Hooks)', 'SCSS', 'JSX'],
      visitOrPlay: 'Visit'
    },
    {
      title: 'Project 3 - KEBB Bazaar',
      github: 'https://github.com/EdwardGillard/sei-group-project',
      deployedLink: 'https://kebb-bazaar-clothes.herokuapp.com/',
      deployedName: 'KEBB Bazaar',
      display: 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592598863/portfolio/Screenshot_2020-06-19_at_21.33.34_xnv3sq.png',
      media: ['https://res.cloudinary.com/dsz79ulhu/image/upload/v1592598863/portfolio/Screenshot_2020-06-19_at_21.33.34_xnv3sq.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592598863/portfolio/Screenshot_2020-06-19_at_21.33.58_esgedb.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592598977/portfolio/Screenshot_2020-06-19_at_21.36.00_xf5kzm.png'],
      description: 'Full stack group project built in 1 week using MERN stack. We created a clothes rental app with social elements. Deployed using Heroku',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'SCSS', 'JSX'],
      visitOrPlay: 'Visit'
    },
    {
      title: 'Bangers.Mate.',
      github: 'https://github.com/EdwardGillard/Bangers-mate.',
      deployedLink: 'https://bangers-mate.herokuapp.com/tracks',
      deployedName: 'Bangers.Mate.',
      display: 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592603185/portfolio/Screenshot_2020-06-19_at_22.43.13_snlodc.png',
      media: ['https://res.cloudinary.com/dsz79ulhu/image/upload/v1592603185/portfolio/Screenshot_2020-06-19_at_22.43.13_snlodc.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592603185/portfolio/Screenshot_2020-06-19_at_22.43.38_ukwid5.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592603185/portfolio/Screenshot_2020-06-19_at_22.45.28_popnsh.png'],
      description: 'An extra credit solo full stack app built in MERN stack. During my GA course I used my free time to create an app where people can recommend and discuss music. Deployed using Heroku.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'SCSS', 'JSX'],
      visitOrPlay: 'Visit'
    },
    {
      title: 'Project 2 - Hackathon',
      github: 'https://github.com/EdwardGillard/SEI-project-two',
      deployedLink: 'https://news-and-weather-worldwide.netlify.app/',
      deployedName: 'News & Weather',
      display: 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592599745/portfolio/News_heb0vx.png',
      media: ['https://res.cloudinary.com/dsz79ulhu/image/upload/v1592599745/portfolio/News_heb0vx.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592599743/portfolio/Weather_lngn75.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592599746/portfolio/Filtered_qnxq25.png'],
      description: 'Pair coded React hackathon app built in 1.5 days consuming two APIs. We used International news and weather to create a front-end only app. Deployed using Netlify',
      technologies: ['React', 'SCSS', 'JSX'],
      visitOrPlay: 'Visit'
    },
    {
      title: 'Project 1 - Drake',
      github: 'https://github.com/EdwardGillard/SEI-project-one-Game',
      deployedLink: 'https://edwardgillard.github.io/SEI-project-one-Game/',
      deployedName: 'Drake Game',
      display: 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592579297/portfolio/Drake2.png',
      media: ['https://res.cloudinary.com/dsz79ulhu/image/upload/v1592579297/portfolio/Drake2.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592579297/portfolio/Drake1_ntzfbp.png', 'https://res.cloudinary.com/dsz79ulhu/image/upload/v1592579297/portfolio/Drake3_iyxlua.png'],
      description: 'A solo, interactive front-end only game built in 8 days using HTML, CSS and JavaScript. An alternative twist to arcade classic Snake. Deployed using GitHub Pages.',
      technologies: ['JavaScript ES6', 'CSS3', 'HTML 5'],
      visitOrPlay: 'Play'
    }
  ])
  const [count, setCount] = React.useState(0)


  //! use count state to cycle through hardcoded projects
  const nextProject = () => {
    if (count < projects.length - 1) {
      setCount(count + 1)
    } else {
      return null
    }
  }

  //! use count state to cycle backwards through hardcoded projects
  const lastProject = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      return null
    }
  }

  return (
    <>
      <div id="projects" className="projects__container">
        <div className="projects__directions" >
          {count > 0 && <h1 onClick={lastProject}> {'<'} </h1>}
        </div>
        <div className="projects__main__display">
          <Swipeable onSwipedRight={lastProject} onSwipedLeft={nextProject} preventDefaultTouchmoveEvent={true}>
            <Carousel
              project={projects[count]}
            />
          </Swipeable>
        </div>
        <div className="projects__directions" onClick={nextProject}>
          {count < projects.length - 1 && <h1> {'>'} </h1>}
        </div>
      </div>
    </>
  )
}

export default Projects