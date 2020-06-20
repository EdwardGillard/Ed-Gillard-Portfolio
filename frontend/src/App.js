import React from 'react'

import Navbar from './components/Navbar'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <div className="Main">
      <Navbar />
      <div className="seperator">
        <hr id="one" />
        <hr id="two" />
        <hr id="three" />
      </div>
      <AboutMe />
      <div className="seperator">
        <hr id="one" />
        <hr id="two" />
        <hr id="three" />
      </div>
      <Projects />
      <div className="seperator">
        <hr id="one" />
        <hr id="two" />
        <hr id="three" />
      </div>
      <Experience />
      <div className="seperator">
        <hr id="one" />
        <hr id="two" />
        <hr id="three" />
      </div>
      <ContactFooter />
    </div>
  )
}

export default App
