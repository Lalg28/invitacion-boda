import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 30,
  navigation: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints:{
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 6,
      // spaceBetween: 30,
    },
  }

  
};
const Clients3 = () => {
  return (
  <>
  <section className="clients-section-three">
      <div className="icon-leaves-28 bounce-x"></div>
      <div className="icon-leaves-29 bounce-y"></div>
      <div className="auto-container">
          <div className="sec-title text-center">
              <span className="sub-title">thank you for giving</span>
              <h2>Valuable Partners</h2>
          </div>

          <div className="sponsors-outer">

            <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme">
              {/* Clients Block */}
              <SwiperSlide className="client-block-three">
              <Link href="#"><img src="images/clients/3-1.png" alt="Image"/> </Link>
              </SwiperSlide>
              {/* Clients Block */}
              <SwiperSlide className="client-block-three">
              <Link href="#"><img src="images/clients/3-2.png" alt="Image"/> </Link>
              </SwiperSlide>
              {/* Clients Block */}
              <SwiperSlide className="client-block-three">
              <Link href="#"><img src="images/clients/3-3.png" alt="Image"/> </Link>
              </SwiperSlide>
              {/* Clients Block */}
              <SwiperSlide className="client-block-three">
              <Link href="#"><img src="images/clients/3-4.png" alt="Image"/> </Link>
              </SwiperSlide>
              {/* Clients Block */}
              <SwiperSlide className="client-block-three">
              <Link href="#"><img src="images/clients/3-5.png" alt="Image"/> </Link>
              </SwiperSlide>
              {/* Clients Block */}
              <SwiperSlide className="client-block-three">
              <Link href="#"><img src="images/clients/3-1.png" alt="Image"/> </Link>
              </SwiperSlide>
              {/* Clients Block */}
              <SwiperSlide className="client-block-three">
              <Link href="#"><img src="images/clients/3-2.png" alt="Image"/> </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
  </>
  );
};
export default Clients3
