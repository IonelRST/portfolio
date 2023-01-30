import React from 'react'
import PropTypes from 'prop-types'
import './work.css'

const worksList = [
  {
    id: 1,
    company_name: 'Abalit Technologies',
    title: 'Frontend Developer',
    description:
      'Build responsive client apps using Flutter and making the whole process of publishing in the stores',
    time: "10/20 - 01/23",  
    technologies: ['Flutter', 'Dart', 'Git']
  }
]

const Work = () => (
  <div className='work'>
    <h1>Experience</h1>
    {worksList.map((work, id) => (
      <WorkItem work={work} key={id} />
      ))}
  </div>
)

Work.propTypes = {}

Work.defaultProps = {}

export default Work

const WorkItem = props => {
  const { company_name, title, description, time, technologies } = props.work;
  return <div className='works-container'>
    <h2>{title}</h2>
    <div className='company-label'>
    <h3>{company_name}</h3>
    <p className='time-label'>{time}</p>
    </div>
    <p>{description}</p>
    <ul className='technologies-label'>
      {technologies.map((technology) => (
        <li className='technology-label'>{technology}</li>
      ))}
    </ul>
  </div>
}