import Link from 'next/link';


const TimeLine = () => {
  return (
    <>

  {/*  Event section  */}
  <section className="event-section-two">
    <div className="anim-icons full-width">
      <div className="icon-flowers-6 bounce-y"></div>
      <div className="icon-leaves-5 bounce-x"></div>
      <div className="icon-leaves-6 bounce-x"></div>
    </div>
    <div className="auto-container">
      <div className="sec-title text-center style-two"> <span className="sub-title">Wedding First Meet to Wedding</span>
        <h2>Timeline</h2>
      </div>
      <div className="row"> 
        {/*  Event Block  */}
        <div className="event-block-two wow fadeInRight">
          <div className="inner-box">
            <div className="date-column">
              <div className="date-box">
                <div className="date"><span>12</span>November</div>
                <div className="icon-flower-6"></div>
                <div className="icon-flower-7"></div>
              </div>
            </div>
            <div className="image-column">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/event2-2.jpg" className="lightbox-image"><img src="/images/resource/event2-2.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            <div className="content-column">
              <div className="content-box">
                <div className="time"><i className="icon far fa-clock"></i>
                  <p>AT 2020</p>
                </div>
                <h4 className="title"><Link href="#">First Meetup</Link></h4>
                <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/*  Event Block  */}
        <div className="event-block-two style-two wow fadeInLeft" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="date-column">
              <div className="date-box">
                <div className="date"><span>01</span>January</div>
                <div className="icon-flower-6"></div>
                <div className="icon-flower-7"></div>
              </div>
            </div>
            <div className="image-column">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/event2-4.jpg" className="lightbox-image"><img src="/images/resource/event2-4.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            <div className="content-column">
              <div className="content-box">
                <div className="time"><i className="icon far fa-clock"></i>
                  <p>AT 2021</p>
                </div>
                <h4 className="title"><Link href="#">First Date</Link></h4>
                <div className="text">From the vibrant flowers and trees to the gently flowing  streams, this park provides the perfect backdrop for this joyous occasion.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/*  Event Block  */}
        <div className="event-block-two wow fadeInRight" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="date-column">
              <div className="date-box">
                <div className="date"><span>10</span>Feb</div>
                <div className="icon-flower-6"></div>
                <div className="icon-flower-7"></div>
              </div>
            </div>
            <div className="image-column">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/event2-3.jpg" className="lightbox-image"><img src="/images/resource/event2-3.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            <div className="content-column">
              <div className="content-box">
                <div className="time"><i className="icon far fa-clock"></i>
                  <p>AT 2021</p>
                </div>
                <h4 className="title"><Link href="#">Engagement</Link></h4>
                <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/*  Event Block  */}
        <div className="event-block-two style-two wow fadeInLeft" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="date-column">
              <div className="date-box">
                <div className="date"><span>14</span>Feb</div>
                <div className="icon-flower-6"></div>
                <div className="icon-flower-7"></div>
              </div>
            </div>
            <div className="image-column">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/event2-1.jpg" className="lightbox-image"><img src="/images/resource/event2-1.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            <div className="content-column">
              <div className="content-box">
                <div className="time"><i className="icon far fa-clock"></i>
                  <p>AT 2:00 PM</p>
                </div>
                <h4 className="title"><Link href="#">Wedding</Link></h4>
                <div className="text">From the vibrant flowers and trees to the gently flowing  streams, this park provides the perfect backdrop for this joyous occasion.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  End Event section  */}
  
  {/*  Couple section  */}
  <section className="couple-section-two">
    <div className="icon-leave-4 bounce-y wow " data-wow-delay="3s"></div>
    <div className="auto-container">
      <div className="row"> 
        {/*  Couple Image Block  */}
        <div className="couple-image-block col-lg-4 order-lg-2 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image overlay-anim"><img src="/images/resource/couple2-2.jpg" alt="Image"/></figure>
              <div className="icon-flower-3 bounce-y"></div>
              <div className="icon-flower-4 bounce-y wow" data-wow-delay="3s"></div>
            </div>
          </div>
        </div>
        
        {/*  Couple Block  */}
        <div className="couple-block-two style-two col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="#"><img src="/images/resource/couple2-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box"> <span className="designation">The Bride</span>
              <h4 className="name"><Link href="#">Jessica Loran</Link></h4>
              <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
            </div>
          </div>
        </div>
        
        {/*  Couple Block  */}
        <div className="couple-block-two col-lg-4 col-md-6 order-lg-3 wow fadeInRight" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="#"><img src="/images/resource/couple2-3.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box"> <span className="designation">The Groom</span>
              <h4 className="name"><Link href="#">Thomas Walkar</Link></h4>
              <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  End Couple section  */}
  
  {/*  Gallery Section  */}
  <section className="gallery-section-three">
    <div className="bg bg-pattern-5 bounce-y"></div>
    <div className="auto-container">
      <div className="row"> 
        {/*  Left Column  */}
        <div className="left-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
          <div className="row"> 
            {/*  Gallery Block  */}
            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
              <div className="inner-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery3-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-1.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            
            {/*  Gallery Block  */}
            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
              <div className="inner-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery3-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-2.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            
            {/*  Gallery Block  */}
            <div className="gallery-block-three col-lg-12 col-md-12 col-sm-12">
              <div className="inner-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery3-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-3.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
        </div>
        
        {/*  Right Column  */}
        <div className="right-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
          <div className="row"> 
            
            {/*  Gallery Block  */}
            <div className="gallery-block-three col-lg-12 col-md-12 col-sm-12">
              <div className="inner-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery3-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-4.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            
            {/*  Gallery Block  */}
            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
              <div className="inner-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery3-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-5.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
            
            {/*  Gallery Block  */}
            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
              <div className="inner-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery3-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-6.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  End Gallery Section  */}
      
    </>
  );
};
export default TimeLine
