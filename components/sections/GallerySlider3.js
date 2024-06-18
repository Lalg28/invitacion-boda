import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 10,
	spaceBetween: 0,
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
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 6,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 10,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 10,
			// spaceBetween: 30,
		},
	}
};
const GallerySlider3 = () => {
	return (
	<>
    <section className="gallery-section-six pt-0">
        <div className="large-container">
            <h3 className="title">Follow @domain.com</h3>
			<Swiper {...swiperOptions} className="gallery-carousel-two owl-carousel owl-theme disable-navs">
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery2-1.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery" className="icon"><i className="fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery2-2.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery2-3.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery2-4.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery2-5.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery6-1.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery6-2.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery" className="icon"><i className="fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery6-2.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery" className="icon"><i className="fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery6-3.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery" className="icon"><i className="fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery6-4.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery" className="icon"><i className="fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="gallery-block-two">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery6-5.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery" className="icon"><i className="fa fa-expand"></i></Link></div>
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
export default GallerySlider3
