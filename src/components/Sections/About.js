import React from 'react'

export const About = () => (
  <section id='about' className='section-padding text-center'>
    <div className='container mb-60'>
      <h2>About <span className='text-light'>Studio</span></h2>
      <p className='max-width-700 lead'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam.</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.2s' data-wow-duration='2s'>
          <div className='icon-top'><i className='icon icon-basic-anchor' /></div>
          <h5 className='features-title'>We’re Creative</h5>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
        </div>
        <div className='col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.4s' data-wow-duration='2s'>
          <div className='icon-top'><i className='icon icon-basic-alarm' /></div>
          <h5 className='features-title'>TWe have magic</h5>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
        </div>
        <div className='col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn' data-wow-delay='0.6s' data-wow-duration='2s'>
          <div className='icon-top'><i className='icon icon-basic-globe' /></div>
          <h5 className='features-title'>Why we do it</h5>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
        </div>
      </div>
    </div>
  </section>
)

export default About
