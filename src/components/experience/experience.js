import React from 'react'
import './experience.css'

const technologiesList = [
  { id: 1, technology_name: 'Flutter', time: '+2.5 years' },
  { id: 5, technology_name: 'Dart', time: '+2.5 years' },
  { id: 2, technology_name: 'HTML', time: '+1 years' },
  { id: 3, technology_name: 'CSS', time: '+1 years' },
  { id: 6, technology_name: 'React', time: '+0.5 years' },
  { id: 7, technology_name: 'Javascript', time: '+0.5 years' },
]

const Experience = () => (
  <div className='experience'>
    <hr className='solid-div'></hr>
    <div className='technology-grid'>
      {technologiesList.map((technology, id) => (
        <TechnologiesItem technology={technology} key={id} ></TechnologiesItem>
      ))}
    </div> 
  </div>
)

Experience.propTypes = {}

Experience.defaultProps = {}

export default Experience

const TechnologiesItem = props => {
  const { technology_name
    , time } = props.technology;
  return <div className='experience-container'>
    <h1>{technology_name}</h1>
    <h3>{time}</h3>
  </div>
}
