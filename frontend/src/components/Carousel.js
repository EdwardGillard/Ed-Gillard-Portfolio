import React from 'react'

function Carousel(props) {
  const [project, setProject] = React.useState('')

  React.useEffect(() => {
    console.log(props)
    setProject(props.project)
  }, [props])

  const changePicture = (e) => {
    setProject({ ...project, display: e.target.src })
  }

  console.log(project)

  if (!project) return <h1>Loading...</h1>
  return (
    <div className="projects__display">
      <div className="project__header">
        <h5>{project.title}</h5>
        <div className="project__technologies">
          {project.technologies.map(tech => <p key={tech}>{tech}</p>)}
        </div>
      </div>
      <div>
        <div className="project__display__image">
          <img src={project.display} alt={project.title} height="325" />
        </div>
        <div className="project__images">
          {project.media.map(image => (
            <div key={image} className="project__image">
              <img onClick={changePicture} src={image} alt={project.title} height="100" />
            </div>))}
        </div>
      </div>
      <div className="project__description">
        <p>{project.description}</p>
      </div>
      <div>
        <a href={project.github} target="_blank" rel="noopener noreferrer"><button>View Github Repo</button></a>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer"><button>{project.visitOrPlay} {project.deployedName}</button></a>
      </div>
    </div>
  )
}

export default Carousel