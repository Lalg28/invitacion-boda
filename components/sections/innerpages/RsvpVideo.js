import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const RsvpVideo = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
   {/*Contact Section */}
  <section className="contact-section">
    <div className="auto-container">
      <div className="row"> 
         {/*Form Column */}
        <div className="form-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
          <div className="inner-column">
            <div className="icon-leave bounce-x"></div>
             {/*Contact Form */}
            <div className="contact-form-one mt-0 wow fadeInRight">
              <h6 className="title">Will you attend? </h6>
              
              {/*Contact */}
              <form method="post" action="get" id="contact-form">
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6 col-sm-6">
                    <div className="radio-box">
                      <label className="custom-radio-box-two">Accept with pleasure
                        <input type="radio" name="radio"/>
                        <span className="checkmark"></span> </label>
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-6">
                    <div className="radio-box">
                      <label className="custom-radio-box-two">Decline with regret
                        <input type="radio" name="radio"/>
                        <span className="checkmark"></span> </label>
                    </div>
                  </div>
                  <div className="form-group col-lg-12">
                    <div className="input-outer">
                      <input type="text" name="name" placeholder="Complete Name" required/>
                    </div>
                  </div>
                  <div className="form-group col-lg-12">
                    <div className="input-outer">
                      <input type="email" name="email" placeholder="Email Address" required/>
                    </div>
                  </div>
                  <div className="form-group col-lg-12">
                    <div className="input-outer">
                      <input type="text" name="number" placeholder="Number of Guests" required/>
                    </div>
                  </div>
                  <div className="form-group col-lg-12">
                    <div className="input-outer">
                      <textarea name="message" placeholder="Notes" required></textarea>
                    </div>
                  </div>
                  <div className="form-group col-lg-12">
                    <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
                  </div>
                </div>
              </form>
            </div>
            {/*End Contact Form  */}
          </div>
        </div>
        
         {/*Image Column */}
        <div className="video-column col-lg-6 col-md-12 wow fadeInLeft">
           {/*Title Column */}
          <div className="sec-title mt-0 mb-0"> <span className="sub-title">The Wedding Day</span>
            <h2>We're getting married!</h2>
            <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
          </div>
          <div className="inner-column pt-50">
            <div className="video-box">
              <figure className="image"><img src="/images/resource/contact1-1.jpg" alt=""/></figure>
              <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" aria-hidden="true"></i></a>
              <div className="icon-leaves-27 rotate-x"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   {/*End Contact Section  */}
  
   {/*Call To Action */}
  <section className="call-to-action">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1.jpg)' }}></div>
    <div className="icon-flowers"></div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="content-box wow fadeInUp"> <i className="icon flaticon-marriage"></i>
          <h2 className="title">Happy Wedding Day!!! <br/> Can't Wait to Watch You Marry</h2>
          <div className="text">PLEASE RSVP BY NOVEMEBER THE 14TH, LET US KNOW YOU'RE COMING!</div>
        </div>
      </div>
    </div>
  </section>
   {/*End Call To Action  */}
  
   {/*Clients Section */}
  <section className="clients-section">
    <div className="bg bg-pattern-8"></div>
    <div className="auto-container">
      <div className="row"> 
         {/*Title Column */}
        <div className="title-column col-xxl-4 wow fadeInLeft">
          <div className="inner-column">
            <div className="sec-title mb-0"> <span className="sub-title">thank you for giving</span>
              <h2>Valuable Partners</h2>
              <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
            </div>
          </div>
        </div>
         {/*Images Column */}
        <div className="images-column col-xxl-8 wow fadeInRight" data-wow-delay="300ms">
          <div className="inner-column">
            <div className="sponsors-outer">
              <div className="row">
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href=""><img src="/images/clients/1.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href=""><img src="/images/clients/2.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href=""><img src="/images/clients/3.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href=""><img src="/images/clients/4.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href=""><img src="/images/clients/5.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href=""><img src="/images/clients/6.png" alt="Image"/></Link></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
  {/*End Clients Section  */}
      
    </>
  );
};
export default RsvpVideo
