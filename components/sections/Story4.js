import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
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
const Story4 = () => {
	return (
	<>
		<section className="story-section-two pt-0">
			<div className="auto-container">
				<div className="sec-title style-four">
					<span className="sub-title">Our Story</span>
					<h2>Wedding Timeline</h2>
				</div>
				<div className="carousel-outer">
				<Swiper {...swiperOptions} className="two-items-carousel owl-carousel owl-theme default-navs">
					<SwiperSlide>
						<div className="story-block-two">
							<div className="inner-box">
								<i className="icon flaticon-wedding-arch"></i>
								<span className="sub-title">Wedding</span>
								<div className="designation">Ceremony</div>
								<div className="text">Duis autem vel eum iriure dolor in vulp utate velit esse <br/> molestie conse quat, vel illum olore eu feugiat Duis aut <br/> em vel eum iriure dolor in vulp utate.</div>
								<div className="image-box">
									<figure className="image"><img src="images/resource/story2-1.jpg" alt="Image"/></figure>
									<div className="icon-leaves-16"></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="story-block-two">
							<div className="inner-box">
								<i className="icon flaticon-romantic-dinner"></i>
								<span className="sub-title">Wedding</span>
								<div className="designation">Lunch Time</div>
								<div className="text">Duis autem vel eum iriure dolor in vulp utate velit esse <br/> molestie conse quat, vel illum olore eu feugiat Duis aut <br/> em vel eum iriure dolor in vulp utate.</div>
								<div className="image-box">
									<figure className="image"><img src="images/resource/story2-2.jpg" alt="Image"/></figure>
									<div className="icon-leaves-16"></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="story-block-two">
							<div className="inner-box">
								<i className="icon flaticon-wedding-arch"></i>
								<span className="sub-title">Wedding</span>
								<div className="designation">Ceremony</div>
								<div className="text">Duis autem vel eum iriure dolor in vulp utate velit esse <br/> molestie conse quat, vel illum olore eu feugiat Duis aut <br/> em vel eum iriure dolor in vulp utate.</div>
								<div className="image-box">
									<figure className="image"><img src="images/resource/story2-1.jpg" alt="Image"/></figure>
									<div className="icon-leaves-16"></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				</div>
			</div>
		</section>
	</>
	);
};
export default Story4
