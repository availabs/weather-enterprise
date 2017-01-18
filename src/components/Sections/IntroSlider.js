import React from 'react'

export const IntroSlider = () => (
  <section id='intro'>
    {/*Slider Hero*/}
    <div className='tp-banner-container'>
      <div className='intro-tp-banner'>
        <ul>
          {/* SLIDE  */}
          <li className='dark-bg' data-transition='fade' data-slotamount={5} data-masterspeed={700}>
            {/* MAIN IMAGE */}
            <img src='img/full/rain1.jpg' alt='slidebg1' data-bgfit='cover' data-bgposition='top center' data-bgrepeat='no-repeat' />
            {/* LAYER NR. 1 */}
            <div className='tp-caption lfb ltt tp-resizeme' data-x='center' data-hoffset={0} data-y='center' data-voffset={-125} data-speed={600} data-start={500} data-easing='Power4.easeOut' data-splitin='none' data-splitout='none' data-elementdelay='0.01' data-endelementdelay='0.1' data-endspeed={500} data-endeasing='Power4.easeIn' style={{zIndex: 2, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
              <img src='img/t-logo1.png' alt='logo' />
            </div>
            {/* LAYER NR. 2 */}
            <h2 className='tp-caption lfb ltt tp-resizeme sc-title' data-x='center' data-hoffset={0} data-y='center' data-voffset={-25} data-speed={600} data-start={700} data-easing='Power4.easeOut' data-splitin='none' data-splitout='none' data-elementdelay='0.01' data-endelementdelay='0.1' data-endspeed={500} data-endeasing='Power4.easeIn' style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>We Are Mazel One
            </h2>
            {/* LAYER NR. 3 */}
            <p className='tp-caption lfb ltt tp-resizeme sc-paragraph-lead' data-x='center' data-hoffset={0} data-y='center' data-voffset={40} data-speed={600} data-start={900} data-easing='Power4.easeOut' data-splitin='none' data-splitout='none' data-elementdelay='0.01' data-endelementdelay='0.1' data-endspeed={500} data-endeasing='Power4.easeIn' style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
              A donec sodales sagittis magna. Sed consequat, leo eget bibendum amet nibh<br />
              sodales augue velit cursus nunc.
            </p>
            {/* LAYER NR. 4 */}
            <div className='tp-caption lfb ltt tp-resizeme sc-button' data-x='center' data-hoffset={0} data-y='center' data-voffset={125} data-speed={600} data-start={1100} data-easing='Power4.easeOut' data-splitin='none' data-splitout='none' data-elementdelay='0.01' data-endelementdelay='0.1' data-endspeed={500} data-endeasing='Power4.easeIn' style={{zIndex: 3, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}>
              <a className='btn btn-md btn-black'>Shop Now</a>
            </div>
          </li>
          {/* SLIDE  */}
        </ul>
        <div className='tp-bannertimer' />
      </div>
    </div>
    {/* End Slider Hero*/}
  </section>
)

export default IntroSlider
