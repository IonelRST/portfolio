import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './footer.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../header/header'

const Footer = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5a1y2i4',
        'template_7kdtidc',
        form.current,
        '-1L9UpGEjRHdQmrzR'
      )
      .then(
        result => {
          document.getElementById('contact-form').reset()
          toast.success('Message send successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div id='footer-form'>
      <div className='footer'>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        {/* Same as */}
        <ToastContainer />
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
              id='contact-form'
              onSubmit={sendEmail}
              ref={form}
              target='_blank'
            >
              <input
                type='text'
                placeholder='NAME'
                name='user_name'
                className='input-name'
                required
              ></input>
              <input
                type='email'
                placeholder='EMAIL'
                name='user_email'
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
