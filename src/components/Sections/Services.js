import React from 'react'
import './scss/Services.scss'

export const Services = () => (

  <section id='service' className='section-padding'>
    <div className='container mb-60 text-center'>
      <h2>WxBiz™ <span className='text-light'>Weather for Business</span></h2>
      <p className='max-width-700 large' style={{textAlign:'justify'}}>The Center recognizes that weather creates an opportunity to increase profits for many businesses within many industries.  We can assess weather impact on your businesses key performance indicators and work to develop solutions that increase profits.</p>  
      <p className='max-width-700 large' style={{textAlign:'justify'}}>The Center has experience developing solutions applicable to several industries and is continuously identifying new opportunities to positively impact the bottom line using weather intelligence.
      Solution industries include: Finance, Agriculture, Food Manufacturing, Transportation, Construction, Healthcare and many more.</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-sm-6 pt-30 pt-sm-0'>
          <div className='content-box right wow fadeIn' data-wow-delay='0.2s' data-wow-duration='2s'>
            <div className='icon-right'><i className='fa fa-jsfiddle' /></div>
            <h5 className='features-title1'>Energy (utility & renewable) </h5>
            <p></p>
          </div>
          <div className='content-box right wow fadeIn' data-wow-delay='0.2s' data-wow-duration='4s'>
            <div className='icon-right'><i className='icon icon-music-play-button' /></div>
            <h5 className='features-title1'>Business Intelligence &amp; Analytics</h5>
            <p></p>
          </div>
          <div className='content-box right wow fadeIn' data-wow-delay='0.2s' data-wow-duration='6s'>
            <div className='icon-right'><i className='icon icon-basic-eye' /></div>
            <h5 className='features-title1'>Logistics</h5>
            <p></p>
          </div>
          <div className='content-box right wow fadeIn' data-wow-delay='0.2s' data-wow-duration='8s'>
            <div className='icon-right'><i className='fa fa-money' /></div>
            <h5 className='features-title1'>Finance</h5>
            <p></p>
          </div>
        </div>
        <div className='col-md-6 col-sm-6 pt-30 pt-sm-0'>
          <div className='content-box left wow fadeIn' data-wow-delay='0.2s' data-wow-duration='2s'>
            <div className='icon-left'><i className='icon icon-basic-gear' /></div>
            <h5 className='features-title1'>Agriculture &amp; Food Manufacturing</h5>
            <p></p>
          </div>
          <div className='content-box left wow fadeIn' data-wow-delay='0.4s' data-wow-duration='2s'>
            <div className='icon-left'><i className='icon icon-basic-cards-diamonds' /></div>
            <h5 className='features-title1'>Aviation &amp; Freight</h5>
            <p></p>
          </div>
          <div className='content-box left wow fadeIn' data-wow-delay='0.6s' data-wow-duration='2s'>
            <div className='icon-left'><i className='icon icon-basic-sheet' /></div>
            <h5 className='features-title1'>Healthcare</h5>
            <p></p>
          </div>
          <div className='content-box left wow fadeIn' data-wow-delay='0.8s' data-wow-duration='2s'>
            <div className='icon-left'><i className='icon icon-basic-headset' /></div>
            <h5 className='features-title1'>Retail, Leisure, and Hospitality</h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </section>

)

export default Services
