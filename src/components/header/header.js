import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import './header.css'
import useWindowsSize from '../../utils/utils'

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
    <h1>&lt;IonelFuioaga /&gt;</h1>
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

  const size = useWindowsSize();

  const { icon, link, ref } = props.social
  return (
    <li>
      <a href={link}>
        <div className='socialIcon'>{icon}</div>
        {size.width > 1024 && <div className='socialLabel'>{ref}</div>}
      </a>
    </li>
  )
}
