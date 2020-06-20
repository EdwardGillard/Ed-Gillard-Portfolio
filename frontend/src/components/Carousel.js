import React from 'react'

function Carousel(props) {
  const [project, setProject] = React.useState('')

  React.useEffect(() => {
    setProject(props.project)
  }, [props])

  const changePicture = (e) => {
    setProject({ ...project, display: e.target.src })
  }

  if (!project) return <h1>Loading...</h1>
  return (
    <div className="projects__display">
      <div className="project__header">
        <h1>{project.title}</h1>
        <div className="project__technologies">
          {project.technologies.map(tech => <p key={tech}>{tech}</p>)}
        </div>
      </div>
      <div>
        <div className="project__display__image">
          <img src={project.display} alt={project.title} />
        </div>
        <div className="project__images" id="images-div">
          {project.media.map(image => (
            <div key={image} className="project__image">
              <img onClick={changePicture} src={image} alt={project.title} height="100" />
            </div>))}
        </div>
      </div>
      <div className="project__description" id="desktop-description">
        <p>{project.description}</p>
      </div>
      <div className="buttons">
        <a href={project.github} target="_blank" rel="noopener noreferrer"><button>View Github</button></a>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer"><button>{project.visitOrPlay} {project.deployedName}</button></a>
      </div>
    </div>
  )
}

export default Carousel