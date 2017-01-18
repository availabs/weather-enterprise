import React from 'react'

export const Contact = () => (

  <section id='contct-info' className='section-padding'>
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-4 mb-sm-30 wow fadeIn' data-wow-delay='0.2s' data-wow-duration='2s'>
          <div className='alt-icon-sm-top'><i className='icon icon-basic-geolocalize-05' /></div>
          <h5 className='features-title'>Address</h5>
          <p>
            502, DieSachbearbeiter, Schönhauser Allee,<br />
            167c10435 Berlin,Germany.
          </p>
        </div>
        <div className='col-md-4 mb-sm-30 wow fadeIn' data-wow-delay='0.4s' data-wow-duration='2s'>
          <div className='alt-icon-sm-top'><i className='icon icon-basic-alarm' /></div>
          <h5 className='features-title'>office Hours</h5>
          <p>
            Mon - Fri : 8am to 6pm<br />
            Sat : 10am to 2pm
          </p>
        </div>
        <div className='col-md-4 mb-sm-30 wow fadeIn' data-wow-delay='0.6s' data-wow-duration='2s'>
          <div className='alt-icon-sm-top'><i className='icon icon-basic-headset' /></div>
          <h5 className='features-title'>Contact</h5>
          <p className='contact-link'>
            <a href='mailto:yourname@domain.com'><span className='text-bold'>Email :</span> yourname@domain.com</a><br />
            <a><span className='text-bold'>Call :</span> +40 (0) 012 345 6789</a>
          </p>
        </div>
      </div>
    </div>
  </section>
            
)

export default Contact
