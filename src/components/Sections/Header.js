import React from 'react'
import './scss/Header.scss'

export const Header = () => (
  <div id='header' className='header'>
    <div className='header-inner'>
      {/* Logo */}
      <div className='logo'>
        <a href='#'>
          <img src='img/logo-white2.png' />
        </a>
      </div>
      {/* End Logo */}
      {/*Navigation Icon*/}
      <div className='nav-menu-icon'>
        <a><i className='fa fa-bars' /></a>
      </div>
      {/*End Navigation Icon*/}
      {/* Navigation Menu */}
      <div className='nav-menu singlepage-nav'>
        <ul className='nav-menu-inner'>
          <li><a href='#intro'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#latest-work'>Work</a></li>
          <li><a href='#service'>Service</a></li>
          <li><a href='#pricing'>Pricing</a></li>
          <li><a href='#client'>Client</a></li>
          <li><a href='#elements'>Elements</a></li>
          <li><a href='#contact-us'>Contact</a></li>
          <li><a className='nav-external all-demos-link' href target='_blank'>Demos</a></li>
        </ul>
      </div>
      {/* End Navigation Menu */}
    </div>
  </div>
)

export default Header
