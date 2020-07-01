import React from 'react'

function AboutMe() {
  return (
    <div id="about-me" className="about__container">
      <div className="about__column-left">
        <h3>From the murky depths of South East London...</h3>
        <h1>Ed Gillard</h1>
        <h3>Full stack developer.</h3>
        <p> I have a solid foundation in front-end and back-end technologies built from a combination of self-study and a 3 month Software Engineering Immersive Bootcamp at General Assembly. </p>
        <p> In my personal life I am addicted to music. Most of my free time is dedicated to attending gigs and festivals. There isn&apos;t a single genre I don&apos;t like. My go to genres are Hiphop, Post Metal, Mathcore, Grunge and Progressive Rock. </p>
      </div>
      <div className="about__column-right">
        <h1>Skills</h1>
        <div className="skills">
          <div className="skills__left">
            <ul>
              <li>React(and hooks)</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Django</li>
              <li>PostgreSQL</li>
              <li>SCSS</li>
              <li>CSS</li>
              <li>JSX</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="skills__right">
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Yarn</li>
              <li>npm</li>
              <li>Pip</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>Insomnia</li>
              <li>VS code</li>
              <li>Google Chrome Dev Tools</li>
              <li>TablePlus</li>
              <li>Robo 3T</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe