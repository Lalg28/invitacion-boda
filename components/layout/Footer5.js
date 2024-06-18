import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 6,
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
			slidesPerView: 6,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 6,
			// spaceBetween: 30,
		},
	}
};
export default function Footer5() {
	return (
	<>
	<footer className="main-footer footer-style-five">
		<div className="icon-flowers-3 bounce-y"></div>
		<div className="icon-flowers-21"></div>
		<div className="auto-container">
			<div className="float-text">Contact</div>
			<h1 className="title">Get in touch</h1>
			<div className="row">
				
				<div className="form-column col-lg-8 col-md-12 col-sm-12 order-lg-2">
					<div className="widgets-section">
						<div className="widget-title">Here's how to plan a wedding</div>
						<div className="contact-form-five">
							<div className="row">
								<form method="post" action="get" id="contact-form">
									<div className="row">
										<div className="form-group col-lg-6">
											<div className="input-outer">
												<input type="text" name="name" placeholder="Complete Name" required/>
											</div>
										</div>
										
										<div className="form-group col-lg-6">
											<div className="input-outer">
												<input type="email" name="email" placeholder="Email Address" required/>
											</div>
										</div>
										
										<div className="form-group col-lg-12">
											<div className="input-outer">
												<textarea name="message" placeholder="Message" required></textarea>
											</div>
										</div>
										
										<div className="form-group col-lg-12">
											<button className="theme-btn btn-style-one orange-bg" type="submit" name="submit-form"><span className="btn-title">Send Message</span></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				
				<div className="content-column col-lg-4 col-md-12 col-sm-12">
					<div className="widgets-section">
						<div className="row">
							<div className="footer-column">
								<div className="footer-widget contact-widget">
									<h6 className="widget-title">Contact Information</h6>
									<div className="widget-content">
										<ul className="contact-list-four">
											<li><i className="icon fal fa-envelope"></i><Link href="#">username@domain.com</Link></li>
											<li><i className="icon fal fa-mobile"></i><Link href="#">+(123) 456 - 7890 - 456 - 7890</Link></li>
											<li><i className="icon fa fa-map-marker-alt"></i><Link href="#">Street New York</Link></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div className="footer-column">
								<div className="footer-widget links-widget">
									<h6 className="widget-title">Get Connected</h6>
									<div className="widget-content">
										<ul className="social-icon-two">
											<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
											<li><Link href="#"><i className="fab fa-google-plus"></i></Link></li>
											<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="footer-lower">
				<Swiper {...swiperOptions} className="gallery-carousel-three owl-carousel owl-theme disable-navs">
					<SwiperSlide>
						<div className="gallery-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><img src="images/resource/gallery4-1.jpg" alt="Image"/></figure>
									<div className="overlay"><Link href="page-gallery" className="icon"><i className="fa fa-expand"></i></Link></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gallery-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><img src="images/resource/gallery4-2.jpg" alt="Image"/></figure>
									<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gallery-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><img src="images/resource/gallery4-3.jpg" alt="Image"/></figure>
									<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gallery-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><img src="images/resource/gallery4-4.jpg" alt="Image"/></figure>
									<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gallery-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><img src="images/resource/gallery4-5.jpg" alt="Image"/></figure>
									<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gallery-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><img src="images/resource/gallery4-6.jpg" alt="Image"/></figure>
									<div className="overlay"><Link href="page-gallery"><i className="icon fa fa-expand"></i></Link></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
		<div className="footer-bottom">
			<div className="auto-container">
				<div className="copyright-text">Copyright © Vendola kodesolution . All rights reserved.</div>
			</div>
		</div>
	</footer>

	</>
	)
}
