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
const Testimonial = () => {
	return (
	<>
    <section className="testimonial-section-three">
      <div className="icon-flower-17 zoom-two"></div>
      <div className="icon-flower-18 zoom-two"></div>
      <div className="auto-container">
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
	</>
	);
};
export default Testimonial
