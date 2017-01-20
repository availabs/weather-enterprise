import React from 'react'
import './scss/IntroSlider.scss'

export const IntroSlider = () => (
  <section id='intro'>
    <div className='intro'>
      <div className='introContainer'>
        <ul className='introList'>
          <li className='dark-bg introListItem' >
            <div className='introImage' style={{ backgroundImage: 'url("img/full/rain1.jpg")' }} />
            <div className='introContent'>
              <div >
                <img src="img/logo-white2.png" />
              </div>
            </div>
            <div className='tp-caption lfb ltt tp-resizeme start'>
              <img src='img/t-logo1.png' alt='logo' style={{width: '47.6973px', height: '47.0858px'}} />
            </div>
            </li>
          </ul>       
        </div>

      </div>
  </section>
)

export default IntroSlider
