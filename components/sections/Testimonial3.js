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
const Testimonial3 = () => {
	return (
	<>
		<section className="testimonial-section-two pt-0">
			<div className="auto-container">
				<div className="sec-title style-three">
					<span className="sub-title">Client’s Reviews</span>
					<h2>thank you for the <br/> best wishes</h2>
				</div>
				<Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme default-navs default-dots">
					<SwiperSlide>
					<div className="testimonial-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><img src="images/resource/testi2-1.jpg" alt="Image"/></figure>
								<div className="testi-frame"></div>
							</div>
							<div className="content-box">
								<div className="text">“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”</div>
								<div className="name">Rose Marko <span className="designation">Bride best friend, Aunt</span></div>
							</div>
						</div>
					</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><img src="images/resource/testi2-1.jpg" alt="Image"/></figure>
									<div className="testi-frame"></div>
								</div>
								<div className="content-box">
									<div className="text">“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”</div>
									<div className="name">Rose Marko <span className="designation">Bride best friend, Aunt</span></div>
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
export default Testimonial3
