import React from 'react'

export const Footer = () => (

 <footer id='contact-us' className='footer section-padding gray-bg'>
    <div className='container text-center'>
      {/*Footer Logo*/}
      <div className='footer-logo mb-25 wow fadeInUp' data-wow-duration='1.5s'>
        <a className='scroll-top' href='#intro'>
          <img src='img/logo-color.png' alt='mazel' />
        </a>
      </div>
      {/*End Footer Logo*/}
      {/* Copyright */}
      <p className='copyright mb-25'>
        Contact<a><b> Colby Creedon</b></a>
      </p>
      {/* Copyright */}
      {/* Social */}
      <ul className='social'>
        <li>
          <a href='mailto:ccreedon@albany.edu' target='_blank'><i className='fa fa-paper-plane' /></a>
        </li>
      </ul>
      {/* End Social */}
    </div>
  </footer>
            
)

export default Footer
