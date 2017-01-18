import React from 'react'

export const Footer = () => (

 <footer id='footer' className='footer section-padding gray-bg'>
    <div className='container text-center'>
      {/*Footer Logo*/}
      <div className='footer-logo mb-25 wow fadeInUp' data-wow-duration='1.5s'>
        <a className='scroll-top' href='#intro'>
          <img src='img/logo-dark.png' alt='mazel' />
        </a>
      </div>
      {/*End Footer Logo*/}
      {/* Copyright */}
      <p className='copyright mb-25'>
        © 2015 <a><b>Mazel Template</b></a>. All Rights Reserved.<br />
        Template by <a href='http://nileforest.com/' target='_blank'><b>nileforest</b></a>
      </p>
      {/* Copyright */}
      {/* Social */}
      <ul className='social'>
        <li>
          <a href='https://www.facebook.com/' target='_blank'><i className='fa fa-facebook' /></a>
        </li>
        <li>
          <a href='https://www.twitter.com/' target='_blank'><i className='fa fa-twitter' /></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/' target='_blank'><i className='fa fa-linkedin' /></a>
        </li>
        <li>
          <a href='https://plus.google.com/' target='_blank'><i className='fa fa-google-plus' /></a>
        </li>
      </ul>
      {/* End Social */}
    </div>
  </footer>
            
)

export default Footer
