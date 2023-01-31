import React, { useState } from 'react'
import './footer.css'
import Header from '../header/header'

const FORM_ENDPOINT = '' // TODO - fill on the later step

const Footer = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <>
        <div className='text-2xl'>Thank you!</div>
        <div className='text-md'>We'll be in touch soon.</div>
      </>
    )
  }

  return (
    <div>
      <div className='footer'>
        <div className='footer-row'>
          <div className='footer-description'>
            <h1>Contact</h1>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className='footer-form'>
            <form
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method='POST'
              target='_blank'
            >
              <input
                type='text'
                placeholder='NAME'
                name='name'
                className='input-name'
                required
              ></input>
              <input
                type='email'
                placeholder='EMAIL'
                name='email'
                className='input-email'
                required
              ></input>
              <input
                type='text'
                placeholder='MESSAGE'
                name='message'
                className='input-message'
                required
              ></input>
              <button className='input-button' type='submit'>
                SEND A MESSAGE<hr className='solid'></hr>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='footer-head'>
        <Header />
      </div>
    </div>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
