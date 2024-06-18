import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 6,
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
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 5,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 6,
			// spaceBetween: 30,
		},
	}
};
const GallerySlider2 = () => {
	return (
	<>
    <section className="subscribe-section pb-0">
        <div className="icon-leaves-6 style-two"></div>
        <div className="icon-leaves-6 bounce-x"></div>
        <div className="icon-flower-23"></div>
        <div className="auto-container">
            <div className="row">
                <div className="title-column col-lg-5 col-md-12">
                    <div className="inner-column">
                        <h2 className="title wow fadeInLeft">Newsletter</h2>
                        <div className="text">Receive fresh blog content and invites to our webinars.</div>
                    </div>
                </div>
                <div className="form-column col-lg-7 col-md-12 col-sm-12">
                    <div className="subscribe-form-one wow fadeInRight">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="email" name="email" className="email" placeholder="Enter your email...." required=""/>
                                <button type="submit" className="theme-btn btn-style-two yellow-bg"><span className="btn-title">Subscribe</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="gallery-carousel-outer">
			<Swiper {...swiperOptions} className="gallery-carousel owl-carousel owl-theme disable-navs">
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
								<figure className="image"><Link href="page-gallery"><img src="images/resource/gallery2-6.jpg" alt="Image"/></Link></figure>
								<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
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
			</Swiper>
            </div>
        </div>
    </section>
	</>
	);
};
export default GallerySlider2
