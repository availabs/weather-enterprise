import React from 'react'

export const About = () => (
  <section id='latest-work' className='section-padding text-center'>
    <div className='container mb-60'>
      <h2>WxR&D™ <span className='text-light'>For the Weather Enterprise</span></h2>
      <p className='max-width-700 large' style={{textAlign:'justify'}}>Companies throughout the weather value chain can benefit from our climate solutions, data, and advanced analytic mapping, as well as our development, validation and calibration of models, forecasts, instruments, and sensors.</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.2s' data-wow-duration='2s'>
          <div className='icon-top'><i className='fa fa-sun-o' /></div>
          <h5 className='features-title'>Climate Solutions</h5>
          <p>Innovative solutions crafted by decorated academics in atmospheric science</p>
        </div>
        <div className='col-md-6 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.4s' data-wow-duration='2s'>
          <div className='icon-top'><i className='fa fa-line-chart' /></div>
          <h5 className='features-title'>Data</h5>
          <p>Real-time, advanced mesoscale weather data</p>
        </div>
        <div className='col-md-12 col-sm-12 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.6s' data-wow-duration='2s'>
          <div className='icon-top'><i className='fa fa-globe' /></div>
          <h5 className='features-title'>Analytic Mapping</h5>
          <p>Web-based mapping of various weather analytics to meet your needs</p>
        </div>
        <div className='col-md-6 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.4s' data-wow-duration='2s'>
          <div className='icon-top'><i className='fa fa-jsfiddle' /></div>
          <h5 className='features-title'>Models and Forecasts</h5>
          <p>We can help you develop, validate and calibrate models and forecasts</p>
        </div>
        <div className='col-md-6 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.6s' data-wow-duration='2s'>
          <div className='icon-top'><i className='fa fa-signal' /></div>
          <h5 className='features-title'>Instruments and Sensors</h5>
          <p>We can help you develop, validate, and calibrate instruments and sensors</p>
        </div>
      </div>
    </div>
  </section>
)

export default About
