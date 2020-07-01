import React from 'react'

import Navbar from './components/Navbar'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactFooter from './components/ContactFooter'
import Divider from './components/Divider'

function App() {
  return (
    <div className="Main">
      <Navbar />
      <Divider />
      <AboutMe />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <ContactFooter />
    </div>
  )
}

export default App
