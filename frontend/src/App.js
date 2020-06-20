import React from 'react'

import Navbar from './components/Navbar'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactFooter from './components/ContactFooter'



function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <hr/>
      <hr />
      <Experience />
      <hr/>
      <hr />
      <Projects id="projects"/>
      <hr/>
      <hr />
      <ContactFooter />
    </>
  )
}

export default App
