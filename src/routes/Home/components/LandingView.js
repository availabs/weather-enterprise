import React from 'react'
import Header from 'components/Sections/Header'
import IntroSlider from 'components/Sections/IntroSlider'
import About from 'components/Sections/About'
import Statement from 'components/Sections/Statement'
import Team from 'components/Sections/Team'
import Testimonial from 'components/Sections/Testimonial'
import Work from 'components/Sections/Work'
import Services from 'components/Sections/Services'
import ActionBox from 'components/Sections/ActionBox'
import Contact from 'components/Sections/Contact'
import Footer from 'components/Sections/Footer'

var LandingView = React.createClass({
  render: function () {
    return (
      <div>
        <section id='preloader'>
          <div className='site-spinner' />
        </section>
        <div id='page-wraper'>
          <div className='wrapper'>
            <Header />
            {/* Fix and Return Intro Slider */}
            <IntroSlider />
            <Statement />
            <About />
            <Statement />
            <Team />
            <hr />
            <Testimonial />
            <Work />
            <hr />
            <Services />
            <ActionBox />
            <section className='map' id='map' />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
})

export default LandingView