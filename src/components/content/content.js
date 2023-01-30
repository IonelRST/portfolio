import React from 'react'
import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'
import './content.css'

const Content = () => (
  <div className='content'>
    <div>
      <h1>
        Nice to meet you!
        <Typewriter
          options={{
            autoStart: true,
            loop: true
          }}
          onInit={typewriter => {
            typewriter.typeString("I'm Ionel Fuioaga!").start().pauseFor(1000)
          }}
        />
      </h1>
      <p className='description'>
        Based in Germany, I'm a Frontend developer with over 2 years of experience in developing and
        scalable client applications. I consider myself to be consistent with my
        goals and I feel comfortable working with a team.
      </p>
      <p className='description'>
        Throughout my career, I have built applications with video calls,
        real-time chats, notifications, maps, graphics and analytics. For these
        features, I have used WebRTC, Sockects, Firebase Messaging, Google Maps
        API, Firebase Analytics, Pixel from Meta.
      </p>
      <button onClick={''}>
        CONTACT ME <hr className='solid'></hr>
      </button>
    </div>
  </div>
)

Content.propTypes = {}

Content.defaultProps = {}

export default Content
