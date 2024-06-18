import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 2,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	},
	pagination: {
	  clickable: true,
	  type: 'progressbar',
	},
	navigation: true,
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
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
	}
};
const Testimonial1 = () => {
	return (
	<>
	<section className="testimonial-section pt-0">
		<div className="auto-container">
			<div className="sec-title">
				<span className="sub-title">Client’s Reviews</span>
				<h2>thank you for the <br/> best wishes</h2>
			</div>
			<div className="carousel-outer">
				<div className="swiper testimonial-slider">
					<Swiper {...swiperOptions}>
						<SwiperSlide>
							<div className="swiper-slide">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="images/resource/testi1-1.jpg" alt="Image"/></figure>
										</div>
										<div className="content-box">
											<h4 className="name">Rose Marko</h4>
											<span className="designation">Bride best friend, Aunt</span>
											<div className="text">“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-slide">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="images/resource/testi1-2.jpg" alt="Image"/></figure>
										</div>
										<div className="content-box">
											<h4 className="name">Willimes Nomina</h4>
											<span className="designation">Bride best friend, Aunt</span>
											<div className="text">“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-slide">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="images/resource/testi1-1.jpg" alt="Image"/></figure>
										</div>
										<div className="content-box">
											<h4 className="name">Rose Marko</h4>
											<span className="designation">Bride best friend, Aunt</span>
											<div className="text">“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	</section>
	</>
	);
};
export default Testimonial1
