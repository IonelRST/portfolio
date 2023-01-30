import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import PropTypes from 'prop-types'
import './header.css'

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: '#0',
    ref: 'www.github.com'
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: '#1',
    ref: 'www.linkedin.com'
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: '#2',
    ref: 'www.whatsapp.com'
  }
]

const Header = () => (
  <div className='header'>
    <h1>ionel_fuioaga</h1>
    <div className='socialIconLabel'>
      {socials.map((social, id) => (
        <SocialIcon social={social} key={id} />
      ))}
    </div>
  </div>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header

const SocialIcon = props => {
  const { icon, link, ref } = props.social
  return (
    <li>
      <a href={link}>
        <div className='socialIcon'>{icon}</div>
        <div className='socialLabel'>{ref}</div>
      </a>
    </li>
  )
}
