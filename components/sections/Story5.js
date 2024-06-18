import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

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
const Story5 = () => {
    const [isOpen, setOpen] = useState(false)
	return (
	<>
		<section className="story-section-three">
			<div className="icon-flowers-15 bounce-y"></div>
			<div className="icon-flowers-16 bounce-y"></div>
			<div className="icon-flowers-17"></div>
			<div className="auto-container">
				<div className="sec-title style-five text-center">
					<span className="sub-title">Get Inspired</span>
					<h2>Wedding Stories</h2>
					<div className="icon-leaves-36"></div>
				</div>
				
					<Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme default-navs">
						<SwiperSlide>
							<div className="story-block-three">
								<div className="inner-box">
									<div className="content-box">
										<h3 className="name">Jessica & Romin</h3>
										<div className="date">Rustic Wedding - December 20, 2024</div>
										<div className="video-box">
											<a onClick={() => setOpen(true)} className="play-btn-two"><i className="icon fa fa-play" aria-hidden="true"></i>
												<span className="title">Watch video</span>
											</a>
										</div>
									</div>
									<div className="image-box">
										<figure className="image"><img src="images/resource/story3-1.jpg" alt="Image"/></figure>
										<div className="story-frame"></div>
										<div className="icon-flower-28"></div>
									</div>
									<div className="text-box">
										<div className="text">“ I'm filled with joy and excitement to be marrying the love of my life. I feel over whelmed with gratitude for the love and support that we've received from our family and friends. ”</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="story-block-three">
								<div className="inner-box">
									<div className="content-box">
										<h3 className="name">Jessica & Romin</h3>
										<div className="date">Rustic Wedding - December 20, 2024</div>
										<div className="video-box">
											<a onClick={() => setOpen(true)} className="play-btn-two"><i className="icon fa fa-play" aria-hidden="true"></i>
												<span className="title">Watch video</span>
											</a>
										</div>
									</div>
									<div className="image-box">
										<figure className="image"><img src="images/resource/story3-1.jpg" alt="Image"/></figure>
										<div className="story-frame"></div>
										<div className="icon-flower-28"></div>
									</div>
									<div className="text-box">
										<div className="text">“ I'm filled with joy and excitement to be marrying the love of my life. I feel over whelmed with gratitude for the love and support that we've received from our family and friends. ”</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

			</div>
		</section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
	</>
	);
};
export default Story5
