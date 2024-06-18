import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
};

const BrideGrooms = () => {
  return (
    <>

    <section className="team-section-four">
      <div className="auto-container">
        <div className="row"> 
          
          {/* Team block */}
          <div className="team-block-four col-lg-4 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href=""><img src="/images/resource/team4-1.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-17"></div>
                <div className="icon-leaves-18"></div>
              </div>
              <div className="content-box">
                <h6 className="name"><Link href="#">petar Walker</Link></h6>
                <span className="designation">Groomsmen</span>
              </div>
            </div>
          </div>
          
          {/* Team block */}
          <div className="team-block-four style-two col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href=""><img src="/images/resource/team4-2.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-19"></div>
                <div className="icon-leaves-20"></div>
              </div>
              <div className="content-box">
                <h6 className="name"><Link href="#">Qarlos Robin</Link></h6>
                <span className="designation">Groomsmen</span>
              </div>
            </div>
          </div>
          
          {/* Team block */}
          <div className="team-block-four col-lg-4 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href=""><img src="/images/resource/team4-3.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-17"></div>
                <div className="icon-leaves-18"></div>
              </div>
              <div className="content-box">
                <h6 className="name"><Link href="#">Rokki Ilues</Link></h6>
                <span className="designation">Groomsmen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="testimonial-section-three">
        <div className="icon-flower-17 zoom-two"></div>
        <div className="icon-flower-18 zoom-two"></div>
        <div className="auto-container">
          <div className="sec-title style-four text-center">
            <span className="sub-title">Client’s Reviews</span>
            <h2>thank you for the <br/> best wishes</h2>
          </div>
          <Swiper {...swiperOptions} className="testimonial-carousel-two owl-carousel owl-theme default-navs-two">
            <SwiperSlide>
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="testi3-frame"></div>
                  <div className="content-box">
                    <div className="icon icon-quote"></div>
                    <div className="text">“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for  you and your partner Christin.”</div>
                    <div className="name">Rose Marko <br/> <span className="designation">Bride best friend, Aunt</span></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="testi3-frame"></div>
                  <div className="content-box">
                    <div className="icon icon-quote"></div>
                    <div className="text">“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”</div>
                    <div className="name">Rafe Cameron <br/> <span className="designation">Groom best friend, Uncle</span></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    <section className="team-section-four">
      <div className="auto-container">
        <div className="sec-title style-four text-center"> <span className="sub-title">Wedding Friends</span>
          <h2>The Bridemaids</h2>
        </div>
        <div className="row"> 
          
          {/* Team block */}
          <div className="team-block-four col-lg-4 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href=""><img src="/images/resource/team4-4.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-17"></div>
                <div className="icon-leaves-18"></div>
              </div>
              <div className="content-box">
                <h6 className="name"><Link href="#">Jessica Loran</Link></h6>
                <span className="designation">Bridemaids</span>
              </div>
            </div>
          </div>
          
          {/* Team block */}
          <div className="team-block-four style-two col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href=""><img src="/images/resource/team4-5.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-19"></div>
                <div className="icon-leaves-20"></div>
              </div>
              <div className="content-box">
                <h6 className="name"><Link href="#">Moniqa Romi</Link></h6>
                <span className="designation">Bridemaids</span>
              </div>
            </div>
          </div>
          
          {/* Team block */}
          <div className="team-block-four col-lg-4 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href=""><img src="/images/resource/team4-6.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-17"></div>
                <div className="icon-leaves-18"></div>
              </div>
              <div className="content-box">
                <h6 className="name"><Link href="#">Biquioo Olive</Link></h6>
                <span className="designation">Bridemaids</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};
export default BrideGrooms
