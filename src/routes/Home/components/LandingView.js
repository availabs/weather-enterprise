import React from 'react'

var LandingView = React.createClass({
  render: function() {
    return (
      <div>
        {/* Site preloader */}
        <section id="preloader">
          <div className="site-spinner" />
        </section>
        {/* End Site preloader */}
        {/* Page Wraper */}
        <div id="page-wraper">
          <div className="wrapper">
            <div id="header" className="header">
              <div className="header-inner">
                {/* Logo */}
                <div className="logo">
                  <a href="#">
                    <img src="img/logo-light.png" />
                  </a>
                </div>
                {/* End Logo */}
                {/*Navigation Icon*/}
                <div className="nav-menu-icon">
                  <a><i className="fa fa-bars" /></a>
                </div>
                {/*End Navigation Icon*/}
                {/* Navigation Menu */}
                <div className="nav-menu singlepage-nav">
                  <ul className="nav-menu-inner">
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#latest-work">Work</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#client">Client</a></li>
                    <li><a href="#elements">Elements</a></li>
                    <li><a href="#contact-us">Contact</a></li>
                    <li><a className="nav-external all-demos-link" href target="_blank">Demos</a></li>
                  </ul>
                </div>
                {/* End Navigation Menu */}
              </div>
            </div>
            {/*Intro Section*/}
            <section id="intro">
              {/*Slider Hero*/}
              <div className="tp-banner-container">
                <div className="intro-tp-banner">
                  <ul>
                    {/* SLIDE  */}
                    <li className="dark-bg" data-transition="fade" data-slotamount={5} data-masterspeed={700}>
                      {/* MAIN IMAGE */}
                      <img src="img/full/28.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="top center" data-bgrepeat="no-repeat" />
                      {/* LAYER NR. 1 */}
                      <div className="tp-caption lfb ltt tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-125} data-speed={600} data-start={500} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 2, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <img src="img/t-logo1.png" alt="logo" />
                      </div>
                      {/* LAYER NR. 2 */}
                      <h2 className="tp-caption lfb ltt tp-resizeme sc-title" data-x="center" data-hoffset={0} data-y="center" data-voffset={-25} data-speed={600} data-start={700} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>We Are Mazel One
                      </h2>
                      {/* LAYER NR. 3 */}
                      <p className="tp-caption lfb ltt tp-resizeme sc-paragraph-lead" data-x="center" data-hoffset={0} data-y="center" data-voffset={40} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        A donec sodales sagittis magna. Sed consequat, leo eget bibendum amet nibh<br />
                        sodales augue velit cursus nunc.
                      </p>
                      {/* LAYER NR. 4 */}
                      <div className="tp-caption lfb ltt tp-resizeme sc-button" data-x="center" data-hoffset={0} data-y="center" data-voffset={125} data-speed={600} data-start={1100} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <a className="btn btn-md btn-black">Shop Now</a>
                      </div>
                    </li>
                    {/* SLIDE  */}
                    <li className="dark-bg" data-transition="fade" data-slotamount={5} data-masterspeed={700}>
                      {/* MAIN IMAGE */}
                      <img src="img/full/30.jpg" alt="slidebg2" data-bgfit="cover" data-bgposition="top center" data-bgrepeat="no-repeat" />
                      {/* LAYER NR. 1 */}
                      <div className="tp-caption lfb ltt tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-125} data-speed={600} data-start={500} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 2, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <img src="img/t-logo1.png" alt="logo" />
                      </div>
                      {/* LAYER NR. 2 */}
                      <h2 className="tp-caption lfb ltt tp-resizeme sc-title" data-x="center" data-hoffset={0} data-y="center" data-voffset={-25} data-speed={600} data-start={700} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>Flexible &amp; Customizable
                      </h2>
                      {/* LAYER NR. 3 */}
                      <p className="tp-caption lfb ltt tp-resizeme sc-paragraph-lead" data-x="center" data-hoffset={0} data-y="center" data-voffset={40} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        A donec sodales sagittis magna. Sed consequat, leo eget bibendum amet nibh<br />
                        sodales augue velit cursus nunc.
                      </p>
                      {/* LAYER NR. 4 */}
                      <div className="tp-caption lfb ltt tp-resizeme sc-button" data-x="center" data-hoffset={0} data-y="center" data-voffset={125} data-speed={600} data-start={1100} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <a className="btn btn-md btn-black">Shop Now</a>
                      </div>
                    </li>
                    {/* SLIDE  */}
                    <li className="dark-bg" data-transition="fade" data-slotamount={5} data-masterspeed={700}>
                      {/* MAIN IMAGE */}
                      <img src="img/full/31.jpg" alt="slidebg3" data-bgfit="cover" data-bgposition="top center" data-bgrepeat="no-repeat" />
                      {/* LAYER NR. 1 */}
                      <div className="tp-caption lfb ltt tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-125} data-speed={600} data-start={500} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 2, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <img src="img/t-logo1.png" alt="logo" />
                      </div>
                      {/* LAYER NR. 2 */}
                      <h2 className="tp-caption lfb ltt tp-resizeme sc-title" data-x="center" data-hoffset={0} data-y="center" data-voffset={-25} data-speed={600} data-start={700} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>I Am a John Doe
                      </h2>
                      {/* LAYER NR. 3 */}
                      <p className="tp-caption lfb ltt tp-resizeme sc-paragraph-lead" data-x="center" data-hoffset={0} data-y="center" data-voffset={40} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        A donec sodales sagittis magna. Sed consequat, leo eget bibendum amet nibh<br />
                        sodales augue velit cursus nunc.
                      </p>
                      {/* LAYER NR. 4 */}
                      <div className="tp-caption lfb ltt tp-resizeme sc-button" data-x="center" data-hoffset={0} data-y="center" data-voffset={125} data-speed={600} data-start={1100} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <a className="btn btn-md btn-black">Shop Now</a>
                      </div>
                    </li>
                    {/* SLIDE  */}
                    <li className="dark-bg" data-transition="fade" data-slotamount={5} data-masterspeed={700}>
                      {/* MAIN IMAGE */}
                      <img src="img/full/32.jpg" alt="slidebg4" data-bgfit="cover" data-bgposition="top center" data-bgrepeat="no-repeat" />
                      {/* LAYER NR. 1 */}
                      <div className="tp-caption lfb ltt tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-125} data-speed={600} data-start={500} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 2, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <img src="img/t-logo1.png" alt="logo" />
                      </div>
                      {/* LAYER NR. 2 */}
                      <h2 className="tp-caption lfb ltt tp-resizeme sc-title" data-x="center" data-hoffset={0} data-y="center" data-voffset={-25} data-speed={600} data-start={700} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>Welcome Studio
                      </h2>
                      {/* LAYER NR. 3 */}
                      <p className="tp-caption lfb ltt tp-resizeme sc-paragraph-lead" data-x="center" data-hoffset={0} data-y="center" data-voffset={40} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        A donec sodales sagittis magna. Sed consequat, leo eget bibendum amet nibh<br />
                        sodales augue velit cursus nunc.
                      </p>
                      {/* LAYER NR. 4 */}
                      <div className="tp-caption lfb ltt tp-resizeme sc-button" data-x="center" data-hoffset={0} data-y="center" data-voffset={125} data-speed={600} data-start={1100} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <a className="btn btn-md btn-black">Shop Now</a>
                      </div>
                    </li>
                    {/* SLIDE  */}
                    <li className="dark-bg" data-transition="fade" data-slotamount={5} data-masterspeed={700}>
                      {/* MAIN IMAGE */}
                      <img src="img/full/35.jpg" alt="slidebg5" data-bgfit="cover" data-bgposition="top center" data-bgrepeat="no-repeat" />
                      {/* LAYER NR. 1 */}
                      <div className="tp-caption lfb ltt tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-125} data-speed={600} data-start={500} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 2, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <img src="img/t-logo1.png" alt="logo" />
                      </div>
                      {/* LAYER NR. 2 */}
                      <h2 className="tp-caption lfb ltt tp-resizeme sc-title" data-x="center" data-hoffset={0} data-y="center" data-voffset={-25} data-speed={600} data-start={700} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>I Am a John Doe
                      </h2>
                      {/* LAYER NR. 3 */}
                      <p className="tp-caption lfb ltt tp-resizeme sc-paragraph-lead" data-x="center" data-hoffset={0} data-y="center" data-voffset={40} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        A donec sodales sagittis magna. Sed consequat, leo eget bibendum amet nibh<br />
                        sodales augue velit cursus nunc.
                      </p>
                      {/* LAYER NR. 4 */}
                      <div className="tp-caption lfb ltt tp-resizeme sc-button" data-x="center" data-hoffset={0} data-y="center" data-voffset={125} data-speed={600} data-start={1100} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={500} data-endeasing="Power4.easeIn" style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
                        <a className="btn btn-md btn-black">Shop Now</a>
                      </div>
                    </li>
                  </ul>
                  <div className="tp-bannertimer" />
                </div>
              </div>
              {/* End Slider Hero*/}
            </section>
            {/* End Intro Section*/}
            {/* About Section */}
            <section id="about" className="section-padding text-center">
              <div className="container mb-60">
                <h2>About <span className="text-light">Studio</span></h2>
                <p className="max-width-700 lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam.</p>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                    <div className="icon-top"><i className="icon icon-basic-anchor" /></div>
                    <h5 className="features-title">We’re Creative</h5>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                    <div className="icon-top"><i className="icon icon-basic-alarm" /></div>
                    <h5 className="features-title">TWe have magic</h5>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                    <div className="icon-top"><i className="icon icon-basic-globe" /></div>
                    <h5 className="features-title">Why we do it</h5>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                  </div>
                </div>
              </div>
            </section>
            {/* End About Section */}
            {/* Statement1 Section */}
            <section id="Statement1" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
              <div className="container">
                <p className="max-width-700 lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam.</p>
                <a className="btn btn-md btn-color">Download</a>
              </div>
            </section>
            {/* End Statement1 Section */}
            {/* Team Section */}
            <section id="team-people" className="section-padding text-center">
              <div className="container">
                <h2 className="page-title">Our <span className="text-light">Team</span></h2>
              </div>
              <div className="container">
                <div className="row">
                  {/*Team Carousel */}
                  <div className="owl-carousel team-carousel nf-carousel-theme">
                    <div className="item">
                      <div className="team-item">
                        <div className="team-item-img">
                          <img src="img/team/01.jpg" alt />
                          <div className="team-item-detail">
                            <div className="team-item-detail-inner light-color">
                              <h5>Mitchell KAPPOS</h5>
                              <p>To portal for some of the world's most high-value net.</p>
                              <ul className="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="team-item-info">
                          <h6>Mitchell KAPPOS</h6>
                          <p className>( Graphic Designer )</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-item-img">
                          <img src="img/team/03.jpg" alt />
                          <div className="team-item-detail">
                            <div className="team-item-detail-inner light-color">
                              <h5>Leonardo da Vinci</h5>
                              <p>To portal for some of the world's most high-value net.</p>
                              <ul className="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="team-item-info">
                          <h6>Leonardo da Vinci</h6>
                          <p className>( Front-End Dev )</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-item-img">
                          <img src="img/team/07.jpg" alt />
                          <div className="team-item-detail">
                            <div className="team-item-detail-inner light-color">
                              <h5>John Doe</h5>
                              <p>To portal for some of the world's most high-value net.</p>
                              <ul className="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="team-item-info">
                          <h6>John Doe</h6>
                          <p className>( Project Manager )</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-item-img">
                          <img src="img/team/04.jpg" alt />
                          <div className="team-item-detail">
                            <div className="team-item-detail-inner light-color">
                              <h5>Michael Lee</h5>
                              <p>To portal for some of the world's most high-value net.</p>
                              <ul className="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="team-item-info">
                          <h6>Michael Lee</h6>
                          <p className>( Web Developer )</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-item-img">
                          <img src="img/team/02.jpg" alt />
                          <div className="team-item-detail">
                            <div className="team-item-detail-inner light-color">
                              <h5>Michael Lee</h5>
                              <p>To portal for some of the world's most high-value net.</p>
                              <ul className="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="team-item-info">
                          <h6>Michael Lee</h6>
                          <p className>Photographer</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-item-img">
                          <img src="img/team/06.jpg" alt />
                          <div className="team-item-detail">
                            <div className="team-item-detail-inner light-color">
                              <h5>Michael Lee</h5>
                              <p>To portal for some of the world's most high-value net.</p>
                              <ul className="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="team-item-info">
                          <h6>Michael Lee</h6>
                          <p className>Photographer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Team Carousel -*/}
                </div>
              </div>
            </section>
            {/* End Team Section */}
            <hr />
            {/* Accordian & Skills Section*/}
            <section id="accordian_skills" className="section-padding">
              <div className="container text-center">
                <h2 className="page-title">Skills <span className="text-light">&amp;</span> History</h2>
              </div>
              <div className="container">
                <div className="row">
                  {/* Accordian */}
                  <div className="col-md-6 col-sm-6 mb-sm-30">
                    <div className="accordion">
                      <div className="accordion-title">
                        <a href>Jan 14, 2008 (Opening)</a>
                      </div>
                      <div className="accordion-content">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                      </div>
                      <div className="accordion-title">
                        <a href>FEB 18, 2011 (The best company of the year)</a>
                      </div>
                      <div className="accordion-content">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                      </div>
                      <div className="accordion-title">
                        <a href>APR 6, 2013 (Opening </a>
                      </div>
                      <div className="accordion-content">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                      </div>
                    </div>
                  </div>
                  {/* End Accordian */}
                  {/* Skills */}
                  <div className="col-md-6 col-sm-6">
                    <div className="skillbar" data-percent="55%">
                      <h6 className="skillbar-title">Design</h6>
                      <div className="skill-bar-percent">55%</div>
                      <div className="skillbar-bar">
                        <div className="skillbar-bar-child" />
                      </div>
                    </div>
                    <div className="skillbar" data-percent="80%">
                      <h6 className="skillbar-title">Development</h6>
                      <div className="skill-bar-percent">80%</div>
                      <div className="skillbar-bar">
                        <div className="skillbar-bar-child" />
                      </div>
                    </div>
                    <div className="skillbar" data-percent="40%">
                      <h6 className="skillbar-title">Photography</h6>
                      <div className="skill-bar-percent">40%</div>
                      <div className="skillbar-bar">
                        <div className="skillbar-bar-child" />
                      </div>
                    </div>
                    <div className="skillbar" data-percent="70%">
                      <h6 className="skillbar-title">Branding</h6>
                      <div className="skill-bar-percent">70%</div>
                      <div className="skillbar-bar">
                        <div className="skillbar-bar-child" />
                      </div>
                    </div>
                  </div>
                  {/* End Skills */}
                </div>
              </div>
            </section>
            {/* End Accordian & Skills Section*/}
            {/* Testimonials Section*/}
            <section id="testimonials" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/05.jpg">
              <div className="container">
                <div className="owl-carousel testimonial-carousel nf-carousel-theme white">
                  <div className="item">
                    <div className="testimonial text-center max-width-700">
                      <div className="page-icon-sm"><i className="fa fa-quote-right" /></div>
                      <p className="lead">I got a dummy for Christmas and started teaching myself. I got books and records and sat in front of the practising.</p>
                      <h6 className="quote-author">Jeff Dunham <span style={{fontWeight: 400}}>( Appel Studio )</span></h6>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial text-center max-width-700">
                      <div className="page-icon-sm"><i className="fa fa-quote-right" /></div>
                      <p className="lead">you can never eat a pet you name. And anyway, I did my first show in the third grade it would be like a ventriloquist.</p>
                      <h6 className="quote-author">Alexander Theroux <span style={{fontWeight: 400}}>( USA )</span></h6>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial text-center max-width-700">
                      <div className="page-icon-sm"><i className="fa fa-quote-right" /></div>
                      <p className="lead">We're not leaving here without Buster, man. Leave no crash-test dummy behind!</p>
                      <h6 className="quote-author">Adam Savage <span style={{fontWeight: 400}}>( Artist )</span></h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Testimonials Section */}
            {/* Work Process Section */}
            <section id="process" className="section-padding">
              <div className="container text-center">
                <h2 className="page-title">Work <span className="text-light">Process</span></h2>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="process-box col-md-2 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                    <div className="tipped" data-title="Step1 - Skype Interview" data-tipper-options="{&quot;direction&quot;:&quot;top&quot;}">
                      <div className="process-icon alt-icon-top"><i className="icon icon-basic-headset" /></div>
                      <h6>Interview</h6>
                    </div>
                  </div>
                  <div className="process-box col-md-2 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                    <div className="tipped" data-title="Step2 - Project Plan" data-tipper-options="{&quot;direction&quot;:&quot;top&quot;}">
                      <div className="process-icon alt-icon-top"><i className="icon icon-basic-book-pencil" /></div>
                      <h6>Plan</h6>
                    </div>
                  </div>
                  <div className="process-box col-md-2 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                    <div className="tipped" data-title="Step3 - Design" data-tipper-options="{&quot;direction&quot;:&quot;top&quot;}">
                      <div className="process-icon alt-icon-top"><i className="icon icon-basic-picture-multiple" /></div>
                      <h6>Design</h6>
                    </div>
                  </div>
                  <div className="process-box col-md-2 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="0.8s" data-wow-duration="2s">
                    <div className="tipped" data-title="Step4 - Development" data-tipper-options="{&quot;direction&quot;:&quot;top&quot;}">
                      <div className="process-icon alt-icon-top"><i className="icon icon-basic-gear" /></div>
                      <h6>Development</h6>
                    </div>
                  </div>
                  <div className="process-box col-md-2 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="1s" data-wow-duration="2s">
                    <div className="tipped" data-title="Step5 - Testing" data-tipper-options="{&quot;direction&quot;:&quot;top&quot;}">
                      <div className="process-icon alt-icon-top"><i className="icon icon-ecommerce-graph3" /></div>
                      <h6>Testing</h6>
                    </div>
                  </div>
                  <div className="process-box col-md-2 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="1.2s" data-wow-duration="2s">
                    <div className="tipped" data-title="Step6 - Delivery" data-tipper-options="{&quot;direction&quot;:&quot;top&quot;}">
                      <div className="process-icon alt-icon-top"><i className="icon icon-basic-anticlockwise" /></div>
                      <h6>Delivery</h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Work Process Section */}
            <hr />
            {/*Latest Work Section*/}
            <section id="latest-work" className="section-padding">
              <div className="container text-center">
                <h2 className="page-title">Latest <span className="text-light">Work</span></h2>
              </div>
              <div className="owl-carousel content-carousel content-slider">
                <div className="item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 mb-sm-30">
                        <img src="img/mockup01.png" alt />
                      </div>
                      <div className="col-md-5 col-md-offset-1">
                        <h4 className="content-title">Project name &amp; Title</h4>
                        <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                        <ul className="list-inside">
                          <li>Branding Design</li>
                          <li>Web Design</li>
                        </ul>
                        <a target="_blank" href="http://google.com/" className="btn btn-md btn-black">Visit Site <i className="fa fa-external-link right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 mb-sm-30">
                        <h4 className="content-title">Project name &amp; Title</h4>
                        <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                        <ul className="list-inside">
                          <li>Fully Responsive</li>
                          <li>Web Design</li>
                        </ul>
                        <a target="_blank" href="http://google.com/" className="btn btn-md btn-black">Visit Site <i className="fa fa-external-link right" /></a>
                      </div>
                      <div className="col-md-6 col-md-offset-1">
                        <img src="img/mockup01.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 mb-sm-30">
                        <img src="img/mockup01.png" alt />
                      </div>
                      <div className="col-md-5 col-md-offset-1">
                        <h4 className="content-title">Fully Responsive</h4>
                        <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                        <p>porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet</p>
                        <div className="spacer-15" />
                        <a target="_blank" href="http://google.com/" className="btn btn-md btn-black">Visit Site <i className="fa fa-external-link right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Latest Work Section*/}
            {/* Portfolio Section */}
            <section id="portfolio" className="section-padding-t gray-bg">
              <div className="container text-center">
                <h2>Our <span className="text-light">Portfolio</span></h2>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <ul className="portfolio-filter categories-filter">
                    <li><a className="categories active" data-filter="*">All</a></li>
                    <li><a className="categories" data-filter=".branding">Branding</a></li>
                    <li><a className="categories" data-filter=".creative">Creative</a></li>
                    <li><a className="categories" data-filter=".photography">Photography</a></li>
                    <li><a className="categories" data-filter=".coffee">coffee</a></li>
                  </ul>
                </div>
                <div className="portfolio-grid-fit row gallery-popup">
                  {/*---*/}
                  <div className="portfolio-item branding photography coffee">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/01.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/01.jpg" title="Portfolio Image 01"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                  <div className="portfolio-item">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/02.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/02.jpg" title="Portfolio Image 02"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                  <div className="portfolio-item branding photography">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/03.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/03.jpg" title="Portfolio Image 03"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                  <div className="portfolio-item creative">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/04.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/04.jpg" title="Portfolio Image 04"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                  <div className="portfolio-item creative">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/05.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/05.jpg" title="Portfolio Image 05"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                  <div className="portfolio-item branding photography">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/06.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/06.jpg" title="Portfolio Image 06"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                  <div className="portfolio-item branding creative coffee">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/07.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/07.jpg" title="Portfolio Image 07"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                  <div className="portfolio-item photography">
                    <div className="portfolio-box">
                      <a className="portfolio-image-wrap">
                        <img src="img/portfolio/thumb/08.jpg" alt /></a>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-tb">
                          <div className="portfolio-caption-tb-cell">
                            <h5>Digital Camera mockup</h5>
                            <p>Mockup - Photography - Graphic - Branding</p>
                            <ul className="portfolio-btn-wraper">
                              <li>
                                <a className="gallery-popup-link btn btn-color" href="img/portfolio/large/08.jpg" title="Portfolio Image 08"><i className="fa fa-search" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                              </li>
                              <li>
                                <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*---*/}
                </div>
              </div>
            </section>
            {/* End Portfolio Section */}
            {/* Action Box Section */}
            <section id="action-box2" className="action-box action-black">
              <div className="container">
                <div className="row action-box-left">
                  <h4 className="action-box-title">Powerfull Onepage Multipurpose Responsive Template ?</h4>
                </div>
                <div className="action-box-right">
                  <a className="btn btn-md btn-color" href="http://google.com/" target="_blank">See More</a>
                </div>
              </div>
            </section>
            {/* Action Box Section */}
            {/* Service Section */}
            <section id="service" className="section-padding">
              <div className="container mb-60 text-center">
                <h2>Our <span className="text-light">Service</span></h2>
                <p className="max-width-700 large">Excepturi Sint Occaecati Cupiditate non Provident voluptate.</p>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 pt-30 pt-sm-0">
                    <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                      <div className="icon-right"><i className="icon icon-basic-display" /></div>
                      <h5 className="features-title">Bootstrap 3</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                    <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="4s">
                      <div className="icon-right"><i className="icon icon-music-play-button" /></div>
                      <h5 className="features-title">html5 &amp; Youtube video</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                    <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="6s">
                      <div className="icon-right"><i className="icon icon-basic-eye" /></div>
                      <h5 className="features-title">Clean code &amp; design</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                    <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="8s">
                      <div className="icon-right"><i className="icon icon-basic-webpage-multiple" /></div>
                      <h5 className="features-title">Unlimited layouts</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                  </div>
                  <div className="col-md-4 hidden-sm hidden-xs text-center">
                    <img src="img/mockup02.png" alt />
                  </div>
                  <div className="col-md-4 col-sm-6 pt-30 pt-sm-0">
                    <div className="content-box left wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                      <div className="icon-left"><i className="icon icon-basic-gear" /></div>
                      <h5 className="features-title">Flexible &amp; Customizable</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                    <div className="content-box left wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                      <div className="icon-left"><i className="icon icon-basic-cards-diamonds" /></div>
                      <h5 className="features-title">Multi Concept &amp; Mutli prapose Theme</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                    <div className="content-box left wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                      <div className="icon-left"><i className="icon icon-basic-sheet" /></div>
                      <h5 className="features-title">Well Documented</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                    <div className="content-box left wow fadeIn" data-wow-delay="0.8s" data-wow-duration="2s">
                      <div className="icon-left"><i className="icon icon-basic-headset" /></div>
                      <h5 className="features-title">Friendly Support</h5>
                      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Service Section */}
            {/* Counter Section */}
            <section id="counter" className="section-padding bg-image overlay-dark dark-bg" data-stellar-background-ratio="0.5" data-background-img="img/full/14.jpg">
              <div className="container text-center">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-sm-30">
                    <div className="alt-icon-top counter-icon"><i className="icon icon-basic-cup" /></div>
                    <h1 className="counter-title counter-num">103</h1>
                    <h5 className="counter-sub-title">Awwards</h5>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-sm-30">
                    <div className="alt-icon-top counter-icon"><i className="icon icon-basic-heart" /></div>
                    <h1 className="counter-title counter-num">256</h1>
                    <h5 className="counter-sub-title">client</h5>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-sm-30">
                    <div className="alt-icon-top counter-icon"><i className="icon icon-basic-case" /></div>
                    <h1 className="counter-title counter-num">148</h1>
                    <h5 className="counter-sub-title">Project</h5>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-sm-30">
                    <div className="alt-icon-top counter-icon"><i className="icon icon-basic-lightbulb" /></div>
                    <h1 className="counter-title counter-num">23</h1>
                    <h5 className="counter-sub-title">Team</h5>
                  </div>
                </div>
              </div>
            </section>
            {/* End Counter Section */}
            {/* Pricing Table */}
            <section id="pricing" className="section-padding">
              <div className="container text-center">
                <h2 className="page-title">Pricing <span className="text-light">Table</span></h2>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                    <div className="pricing-box">
                      <div className="pricing-title pricing-padding-t">
                        <h4>Regular</h4>
                      </div>
                      <div className="pricing-price pricing-padding">
                        <p><span className="dollar">$</span><span className="pricing-price-lg">49</span><span className="pricing-price-sm">/ month</span></p>
                      </div>
                      <div className="pricing-features">
                        <ul>
                          <li>Full Access</li>
                          <li>1 Domain <strong>Free</strong></li>
                          <li>Source Files</li>
                          <li><strong>50 User Accounts</strong></li>
                          <li>6 Month License</li>
                          <li>Premium Support</li>
                        </ul>
                      </div>
                      <div className="pricing-button pricing-padding">
                        <a className="btn btn-md btn-black" href="http://google.com/" target="_blank"><i className="fa fa-user left" />Sign Up</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                    <div className="pricing-box highlight">
                      <div className="pricing-title pricing-padding-t">
                        <h4>Standard</h4>
                      </div>
                      <div className="pricing-price pricing-padding">
                        <p><span className="dollar">$</span><span className="pricing-price-lg color">99</span><span className="pricing-price-sm">/ month</span></p>
                      </div>
                      <div className="pricing-features">
                        <ul>
                          <li>Full Access</li>
                          <li>10 Domain <strong>Free</strong></li>
                          <li>Source Files</li>
                          <li><strong>500 User Accounts</strong></li>
                          <li>6 Month License</li>
                          <li>Premium Support</li>
                        </ul>
                      </div>
                      <div className="pricing-button pricing-padding">
                        <a className="btn btn-md btn-color" href="http://google.com/" target="_blank"><i className="fa fa-user left" />Sign Up</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                    <div className="pricing-box">
                      <div className="pricing-title pricing-padding-t">
                        <h4>Advanced</h4>
                      </div>
                      <div className="pricing-price pricing-padding">
                        <p><span className="dollar">$</span><span className="pricing-price-lg">199</span><span className="pricing-price-sm">/ month</span></p>
                      </div>
                      <div className="pricing-features">
                        <ul>
                          <li>Full Access</li>
                          <li>100 Domain <strong>Free</strong></li>
                          <li>Source Files</li>
                          <li><strong>5000 User Accounts</strong></li>
                          <li>6 Month License</li>
                          <li>Free Support</li>
                        </ul>
                      </div>
                      <div className="pricing-button pricing-padding">
                        <a className="btn btn-md btn-black" href="http://google.com/" target="_blank"><i className="fa fa-user left" />Sign Up</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Pricing Table */}
            {/* video Section */}
            <section id="video-action" className="section-padding bg-image overlay-dark dark-bg" data-stellar-background-ratio="0.5" data-background-img="img/full/02.jpg">
              <div className="container text-center">
                <div className="page-icon">
                  <a className="video-popup white" href="https://www.youtube.com/watch?v=JXOXns_gx8k"><i className="icon icon-music-play-button" /></a>
                </div>
                <p className="max-width-700 lead">
                  We’re developing a number of special projects if interested,<br />
                  see the promo video
                </p>
                <h6 className="page-title-alt color mb-0">See Watch Video</h6>
              </div>
            </section>
            {/* End video Section */}
            {/* Client Logo */}
            <section id="client" className="section-padding">
              <div className="container text-center">
                <h2 className="page-title">Happy <span className="text-light">Client</span></h2>
              </div>
              <div className="container">
                <div className="owl-carousel client-carousel">
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/01.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/02.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/03.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/04.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/05.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/06.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/08.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/01.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/02.png" alt /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <a href="#">
                        <img src="img/logos/03.png" alt /></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Client Logo */}
            <hr />
            {/* Tabs & Extra Elements */}
            <section id="elements" className="section-padding">
              <div className="container text-center">
                <h2 className="page-title">Tabs <span className="text-light">&amp;</span> Elements</h2>
              </div>
              <div className="container">
                <ul className="tabs-nav alt-icon-tab text-center">
                  <li className="mb-30 active">
                    <a href="#tab-video" data-toggle="tab">
                      <div className="alt-icon-top"><i className="icon icon-basic-video" /></div>
                      <h6>Video</h6>
                    </a>
                  </li>
                  <li className="mb-30">
                    <a href="#tab-image-slider" data-toggle="tab">
                      <div className="alt-icon-top"><i className="icon icon-basic-picture" /></div>
                      <h6>Image Slider</h6>
                    </a>
                  </li>
                  <li className="mb-30">
                    <a href="#tab-icon-box" data-toggle="tab">
                      <div className="alt-icon-top"><i className="icon icon-basic-spades" /></div>
                      <h6>Icon Box</h6>
                    </a>
                  </li>
                  <li className="mb-30">
                    <a href="#tab-content-box" data-toggle="tab">
                      <div className="alt-icon-top"><i className="icon icon-basic-webpage-txt" /></div>
                      <h6>Content Box</h6>
                    </a>
                  </li>
                  <li className="mb-30">
                    <a href="#tab-cover-box" data-toggle="tab">
                      <div className="alt-icon-top"><i className="icon icon-basic-webpage-multiple" /></div>
                      <h6>Cover Box</h6>
                    </a>
                  </li>
                </ul>
                <div className="tabs-cont">
                  <div id="tab-video" className="tab-pane active">
                    <div className="row">
                      {/*<div class="col-md-6">
                                    <div class="media">
                                        <iframe src="https://player.vimeo.com/video/37298913?color=ffffff&title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                    </div>*/}
                      <div className="col-md-10 col-md-offset-1">
                        <div className="media">
                          <iframe src="https://www.youtube.com/embed/k9EyPfc0FXc?rel=0&controls=0&showinfo=0" frameBorder={0} allowFullScreen />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-image-slider" className="tab-pane">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1">
                        <div className="owl-carousel image-carousel nf-carousel-theme white">
                          <div className="item">
                            <img src="img/full/06.jpg" alt />
                          </div>
                          <div className="item">
                            <img src="img/full/14.jpg" alt />
                          </div>
                          <div className="item">
                            <img src="img/full/09.jpg" alt />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-icon-box" className="tab-pane">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 col-xs-12 mb-sm-30">
                        <div className="content-box alt-left">
                          <div className="alt-icon-left">
                            <i className="icon icon-basic-cup" />
                          </div>
                          <h5 className="features-title">Branding Design</h5>
                          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 mb-sm-30">
                        <div className="content-box alt-left">
                          <div className="alt-icon-left">
                            <i className="icon icon-basic-life-buoy" />
                          </div>
                          <h5 className="features-title">Web Design</h5>
                          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 mb-sm-30">
                        <div className="content-box alt-right">
                          <div className="alt-icon-right">
                            <i className="icon icon-basic-lightbulb" />
                          </div>
                          <h5 className="features-title">App Development</h5>
                          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 mb-sm-30">
                        <div className="content-box alt-left">
                          <div className="alt-icon-left">
                            <i className="icon icon-basic-star" />
                          </div>
                          <h5 className="features-title">Graphic Design</h5>
                          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 mb-sm-30">
                        <div className="content-box alt-left">
                          <div className="alt-icon-left">
                            <i className="icon icon-ecommerce-graph1" />
                          </div>
                          <h5 className="features-title">Landscape Photography</h5>
                          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 mb-sm-30">
                        <div className="content-box alt-right">
                          <div className="alt-icon-right">
                            <i className="icon icon-music-play-button" />
                          </div>
                          <h5 className="features-title">Photo Editing</h5>
                          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-content-box" className="tab-pane">
                    <div className="container text-center">
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12 mb-30">
                          <div className="content-box content-box-with-bg">
                            <div className="icon-top icon-color"><i className="icon icon-basic-accelerator" /></div>
                            <h5 className="features-title">Branding Design</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 mb-30">
                          <div className="content-box content-box-with-bg">
                            <div className="icon-top icon-color"><i className="icon icon-basic-cup" /></div>
                            <h5 className="features-title">Web Design</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 mb-30">
                          <div className="content-box content-box-with-bg">
                            <div className="icon-top icon-color"><i className="icon icon-basic-anchor" /></div>
                            <h5 className="features-title">App Development</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 mb-30">
                          <div className="content-box content-box-with-bg">
                            <div className="icon-top icon-black"><i className="icon icon-basic-globe" /></div>
                            <h5 className="features-title">Graphic Design</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 mb-30">
                          <div className="content-box content-box-with-bg">
                            <div className="icon-top icon-black"><i className="icon icon-basic-gear" /></div>
                            <h5 className="features-title">Photography</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 mb-30">
                          <div className="content-box content-box-with-bg">
                            <div className="icon-top icon-black"><i className="icon icon-basic-paperplane" /></div>
                            <h5 className="features-title">Photo Editing</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-cover-box" className="tab-pane">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="cover-box mb-30">
                            <figure className="cover-box-img">
                              <img src="img/portfolio/thumb/09.jpg" alt="cover-img" />
                            </figure>
                            <div className="cover-box-content">
                              <h5>Responsive Design</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos ea est, impedit incidunt, laboriosam maxime</p>
                              <a className="link">Read More <i className="fa fa-angle-right right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="cover-box mb-30">
                            <figure className="cover-box-img">
                              <img src="img/portfolio/thumb/06.jpg" alt="cover-img" />
                            </figure>
                            <div className="cover-box-content">
                              <h5>App Development</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos ea est, impedit incidunt, laboriosam maxime</p>
                              <a className="link">Read More <i className="fa fa-angle-right right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="cover-box mb-30">
                            <figure className="cover-box-img">
                              <img src="img/portfolio/thumb/05.jpg" alt="cover-img" />
                            </figure>
                            <div className="cover-box-content">
                              <h5>Photography</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos ea est, impedit incidunt, laboriosam maxime</p>
                              <a className="link">Read More <i className="fa fa-angle-right right" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Tabs & Extra Elements */}
            {/* Contact Form */}
            <section id="contact-us" className="section-padding dark-bg bg-image overlay-dark60" data-background-img="img/full/20.jpg" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row text-center">
                  <h6 className="page-title-alt color mb-15">Wanna say hello? </h6>
                  <h2 className="page-title">Get In <span className="text-light">Touch</span></h2>
                </div>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="row">
                      <form id="contact" className="contact-form" role="form">
                        <div className="col-md-12 text-center">
                          <h5 className="successContent">
                            <i className="fa fa-check left" style={{color: '#5cb45d'}} />Your message has been sent successfully.
                          </h5>
                          <h5 className="errorContent" style={{color: '#e1534f'}}>
                            <i className="fa fa-exclamation-circle left" />There was a problem validating the form please check!
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <div className="form-field-wrapper">
                            <input className="input-md form-full" id="form-name" type="text" name="form-name" placeholder="Your Name" required />
                          </div>
                          <div className="form-field-wrapper">
                            <input className="input-md form-full" id="form-email" type="email" name="form-email" placeholder="Email" required />
                          </div>
                          <div className="form-field-wrapper">
                            <input className="input-md form-full" id="form-subject" type="text" name="form-subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-0">
                          <div className="form-field-wrapper">
                            <textarea className="input-md form-full" id="form-message" rows={7} name="form-message" placeholder="Your Message" required defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <button className="btn-contact-submit btn btn-md btn-color" type="submit" id="form-submit" name="submit">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Contact Form */}
            {/* Map section */}
            <section className="map" id="map" />
            {/* End Map section */}
            {/*Contact Info Section*/}
            <section id="contct-info" className="section-padding">
              <div className="container text-center">
                <div className="row">
                  <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                    <div className="alt-icon-sm-top"><i className="icon icon-basic-geolocalize-05" /></div>
                    <h5 className="features-title">Address</h5>
                    <p>
                      502, DieSachbearbeiter, Schönhauser Allee,<br />
                      167c10435 Berlin,Germany.
                    </p>
                  </div>
                  <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                    <div className="alt-icon-sm-top"><i className="icon icon-basic-alarm" /></div>
                    <h5 className="features-title">office Hours</h5>
                    <p>
                      Mon - Fri : 8am to 6pm<br />
                      Sat : 10am to 2pm
                    </p>
                  </div>
                  <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                    <div className="alt-icon-sm-top"><i className="icon icon-basic-headset" /></div>
                    <h5 className="features-title">Contact</h5>
                    <p className="contact-link">
                      <a href="mailto:yourname@domain.com"><span className="text-bold">Email :</span> yourname@domain.com</a><br />
                      <a><span className="text-bold">Call :</span> +40 (0) 012 345 6789</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* End Contact Info Section*/}
            {/*Footer Section*/}
            <footer id="footer" className="footer section-padding gray-bg">
              <div className="container text-center">
                {/*Footer Logo*/}
                <div className="footer-logo mb-25 wow fadeInUp" data-wow-duration="1.5s">
                  <a className="scroll-top" href="#intro">
                    <img src="img/logo-dark.png" alt="mazel" />
                  </a>
                </div>
                {/*End Footer Logo*/}
                {/* Copyright */}
                <p className="copyright mb-25">
                  © 2015 <a><b>Mazel Template</b></a>. All Rights Reserved.<br />
                  Template by <a href="http://nileforest.com/" target="_blank"><b>nileforest</b></a>
                </p>
                {/* Copyright */}
                {/* Social */}
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin" /></a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus" /></a>
                  </li>
                </ul>
                {/* End Social */}
              </div>
            </footer>
            {/* End Footer Section*/}
          </div>
        </div>
      </div>
    );
  }
});

export default LandingView