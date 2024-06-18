import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
	}
};
const Gallery5 = () => {
	return (
	<>
		<section className="gallery-section-eight pt-0">
			<div className="carousel-outer">

				<div className="swiper gallery-slider">
					<div className="swiper-wrapper">
				<Swiper {...swiperOptions}>
					<SwiperSlide>
						<div className="swiper-slide">
							<div className="gallery-block-eight">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image overlay-anim"><Link href="images/resource/gallery8-1.jpg" className="lightbox-image"><img src="images/resource/gallery8-1.jpg" alt="Image"/></Link></figure>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-slide">
							<div className="gallery-block-eight">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image overlay-anim"><Link href="images/resource/gallery8-2.jpg" className="lightbox-image"><img src="images/resource/gallery8-2.jpg" alt="Image"/></Link></figure>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-slide">
							<div className="gallery-block-eight">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image overlay-anim"><Link href="images/resource/gallery8-3.jpg" className="lightbox-image"><img src="images/resource/gallery8-3.jpg" alt="Image"/></Link></figure>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-slide">
							<div className="gallery-block-eight">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image overlay-anim"><Link href="images/resource/gallery8-1.jpg" className="lightbox-image"><img src="images/resource/gallery8-1.jpg" alt="Image"/></Link></figure>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-slide">
							<div className="gallery-block-eight">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image overlay-anim"><Link href="images/resource/gallery8-2.jpg" className="lightbox-image"><img src="images/resource/gallery8-2.jpg" alt="Image"/></Link></figure>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
					</div>
					<div className="swiper-pagination styled-pagination"></div>
				</div>

				
				<div className="gallery-navs">
					<div className="testi-prev"><i className="fa fa-angle-left"></i></div>
					<div className="testi-next"><i className="fa fa-angle-right"></i></div>
				</div>
			</div>
		</section>
	</>
	);
};
export default Gallery5
