import React from 'react'
import Github from '../assets/github-logo.png'
import LinkedIn from '../assets/linkedin-logo.png'
import Mail from '../assets/email.png'

function ContactFooter() {
  return (
    <div id="contact" className="footer__container">
      <h1>Get in contact</h1>
      <div className="logos">
        <a href="https://github.com/EdwardGillard" target="_blank" rel="noopener noreferrer"><img src={Github} alt="GitHub" height="100" width="100" /></a>
        <a href="https://www.linkedin.com/in/ed-gillard/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" height="100" width="100" /></a>
        <a href="mailto: edwardgillard2410@gmail.com"><img src={Mail} alt="Email" height="100" width="100" /></a>
      </div>
    </div>
  )
}

export default ContactFooter