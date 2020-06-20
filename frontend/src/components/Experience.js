import React from 'react'
import Ga from '../assets/GA.png'

function Experience() {
  return (
    <div id="experience" className="experience__container">
      <h1>Experience</h1>
      <div className="experience__ga">
        <div className="logos">
          <img src={Ga} alt="General Assembley" height="100" width="100" />
          <h3>General Assembly</h3>
        </div>
        <div className="experience__ga__content">
          <p> 3 month Software Engineering Immersive bootcamp at General Assembly. This course covered a range of subjects to give a strong foundation and equip me with the skills I need to pursue a career as a developer. I gained an understanding of JavaScript and Python in addition to a range of frameworks and plug-ins. Using various stacks to create full stack applications and create and consume APIs. Another important aspect of the course was learning to use  a variety of developer tools and deployment solutions. </p>
        </div>
      </div>
    </div>
  )

}


export default Experience