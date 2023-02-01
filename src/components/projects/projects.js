import React from 'react'
import './projects.css'
import portfolio from '../../images/react-portfolio.png'
import tictactoe from '../../images/tictactoe-project.png'
import { FaGithub } from 'react-icons/fa'
import handleClickScroll from '../../utils/scrollToContact'

const projectsList = [
  {
    id: 1,
    project_name: 'Portfolio',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    link: null,
    link_github: 'https://github.com/IonelRST/portfolio',
    image: portfolio
  },
  {
    id: 2,
    project_name: 'Tic tac toe',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    link: 'https://ionelrst.github.io/tic-tac-toe/',
    link_github: 'https://github.com/IonelRST/tic-tac-toe',
    image: tictactoe
  }
]

const Projects = () => (
  <div className='projects'>
    <div className='title'>
      <h1>Projects</h1>
      <button onClick={handleClickScroll}>
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
        <a className='social-label' href={link_github}>
          <div className='social-icon'>
            <FaGithub />
          </div>
        </a>
      </div>
      {link !== null ? (
        <a href={link}>
          <img className='project-image' src={image} alt={project_name}></img>
        </a>
      ) : (
        <img className='project-image' src={image} alt={project_name}></img>
      )}

      <ul className='used-technologies'>
        {technologies.map(technology => (
          <li className='technology-label'>{technology}</li>
        ))}
      </ul>
    </div>
  )
}
