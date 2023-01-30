import React from 'react'
import PropTypes from 'prop-types'
import './projects.css'
import portfolio from '../../images/react-portfolio.png'
import { FaGithub } from 'react-icons/fa'

const projectsList = [
  {
    id: 1,
    project_name: 'Portfolio',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    link: 'www.hola.com',
    link_github: 'www.github.com',
    image: portfolio
  },
  {
    id: 1,
    project_name: 'Portfolio',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    link: 'www.hola.com',
    link_github: 'www.github.com',
    image: portfolio
  },
  {
    id: 1,
    project_name: 'Portfolio',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    link: 'www.hola.com',
    link_github: 'www.github.com',
    image: portfolio
  },
  {
    id: 1,
    project_name: 'Portfolio',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    link: 'www.hola.com',
    link_github: 'www.github.com',
    image: portfolio
  }
]

const Projects = () => (
  <div className='projects'>
    <div className='title'>
      <h1>Projects</h1>
      <button onClick={''}>
        CONTACT ME <hr className='solid'></hr>
      </button>
    </div>
    <div className='projects-grid'>
      {projectsList.map((project, id) => (
        <ProjectsItems project={project} key={id}></ProjectsItems>
      ))}
    </div>
  </div>
)

Projects.propTypes = {}

Projects.defaultProps = {}

export default Projects

const ProjectsItems = props => {
  const { project_name, technologies, link, link_github, image } = props.project
  return (
    <div className='project-container'>
      <div className='title'>
        <h3 className='project-title'>{project_name}</h3>
        <a className='social-label' href={link}>
          <div className='social-icon'>
            <FaGithub />
          </div>
          {link_github}
        </a>
      </div>
      <img className='project-image' src={image} alt={project_name}></img>
      <ul className='used-technologies'>
        {technologies.map(technology => (
          <li className='technology-label'>{technology}</li>
        ))}
      </ul>
    </div>
  )
}
