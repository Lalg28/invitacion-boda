import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Story = () => {
  return (
    <>

    <section className="story-section">
      <div className="anim-icons full-width"> <span className="icon icon-flowers-10 bounce-y"></span> <span className="icon icon-flowers-11 bounce-y wow" data-wow-delay="3s"></span> </div>
      <div className="auto-container">
        <div className="sec-title style-three text-center"> <span className="icon icon-green-heart"></span> <span className="sub-title">Our Story</span>
          <h2>Sweet love Story</h2>
        </div>
        <div className="row"> 
          
          {/* Column */}
          <div className="column col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"> 
            {/* Story Block */}
            <div className="story-block">
              <div className="inner-box">
                <div className="content-box">
                  <div className="date">December 23, 2023</div>
                  <h4 className="title">First Time <br/> We Meet</h4>
                  <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
                </div>
              </div>
            </div>
            <div className="icon-heart-4"></div>
            
            {/* Story Block */}
            <div className="story-block">
              <div className="inner-box">
                <div className="content-box">
                  <div className="date">December 23, 2023</div>
                  <h4 className="title">Our First <br/> Date</h4>
                  <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column */}
          <div className="column col-xl-3 col-lg-6 col-md-6 wow fadeInRight order-xl-3"> 
            {/* Story Block */}
            <div className="story-block ">
              <div className="inner-box">
                <div className="content-box">
                  <div className="date">December 23, 2023</div>
                  <h4 className="title">She said <br/> yes</h4>
                  <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
                </div>
              </div>
            </div>
            <div className="icon-heart-4"></div>
            
            {/* Story Block */}
            <div className="story-block ">
              <div className="inner-box">
                <div className="content-box">
                  <div className="date">December 23, 2023</div>
                  <h4 className="title">Get love <br/> married</h4>
                  <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-xl-6 wow fadeInUp">
            <Swiper slidesPerView={1} spaceBetween={0} autoplay={{ delay: 2000, disableOnInteraction: false,}} pagination={{clickable: true}} modules={[Autoplay, Navigation, Pagination]} className="single-item-carousel">
              <SwiperSlide>
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/story1-1.png" alt="Image"/></figure>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/story1-2.png" alt="Image"/></figure>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/story1-1.png" alt="Image"/></figure>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/story1-2.png" alt="Image"/></figure>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    <section className="couple-section-two">
      <div className="icon-leave-4 bounce-y wow " data-wow-delay="3s"></div>
      <div className="auto-container">
        <div className="row"> 
          {/* Couple Image Block */}
          <div className="couple-image-block col-lg-4 order-lg-2 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><img src="/images/resource/couple2-2.jpg" alt="Image"/></figure>
                <div className="icon-flower-3 bounce-y"></div>
                <div className="icon-flower-4 bounce-y wow" data-wow-delay="3s"></div>
              </div>
            </div>
          </div>
          
          {/* Couple Block */}
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
          
          {/* Couple Block */}
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

    <section className="gallery-section-seven pt-0">
      <div className="icon-leaves-21 bounce-y"></div>
      <div className="icon-leaves-22 bounce-y wow" data-wow-delay="5s"></div>
      <div className="auto-container">
        <div className="outer-container">
          <div className="sec-title style-four"> <span className="sub-title">some beautiful memories</span>
            <h2>Wedding Clicks</h2>
            <Link href="/page-gallery" className="view-all">View all photos <i className="icon fa fa-angle-right"></i></Link>
          </div>
        </div>
        <div className="row g-0"> 
          {/* Gallery Block */}
          <div className="gallery-block-seven style-two col-lg-4 col-sm-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery7-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery7-1.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
          
          {/* Gallery Block */}
          <div className="gallery-block-seven col-lg-4 col-sm-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery7-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery7-2.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
          
          {/* Gallery Block */}
          <div className="gallery-block-seven style-two col-lg-4 col-sm-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery7-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery7-3.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
          
          {/* Gallery Block */}
          <div className="gallery-block-seven col-lg-4 col-sm-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery7-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery7-4.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
          
          {/* Gallery Block */}
          <div className="gallery-block-seven style-two col-lg-4 col-sm-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery7-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery7-5.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
          
          {/* Gallery Block */}
          <div className="gallery-block-seven col-lg-4 col-sm-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="/images/resource/gallery7-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery7-6.jpg" alt="Image"/></Link></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};
export default Story
