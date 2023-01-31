import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import './header.css'
import useWindowsSize from '../../utils/utils'

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: 'https://github.com/IonelRST',
    ref: 'github.com/IonelRST'
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/ionelfm/',
    ref: 'linkedin.com/in/ionelfm'
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: 'https://wa.me/+4591620774',
    ref: '+45 91 62 07 74'
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
