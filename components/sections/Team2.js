import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
	  clickable: true
	},
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
			slidesPerView: 4,
			// spaceBetween: 30,
		},
	}
};
const Team2 = () => {
	return (
	<>
    <section className="team-section-two pt-0">
	    <div className="icon-flowers-7 bounce-y"></div>
      <div className="auto-container">
        <div className="sec-title text-center style-two">
          <span className="sub-title">Our Friends</span>
          <h2>Bridesmaids & Groomsmen</h2>
        </div>
				<Swiper {...swiperOptions} className="four-items-carousel">
					<SwiperSlide>
						<div className="team-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team2-1.jpg" alt=""/></Link></figure>
									<div className="icon-flower-10"></div>
									<div className="icon-flower-11"></div>
								</div>
								<div className="content-box">
									<h6 className="name"><Link href="page-bride-and-groom">Robina Molines</Link></h6>
									<span className="designation">Bridesmaid</span>
									<ul className="social-icon-two">
										<li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-google-plus"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team2-2.jpg" alt=""/></Link></figure>
									<div className="icon-flower-10"></div>
									<div className="icon-flower-11"></div>
								</div>
								<div className="content-box">
									<h6 className="name"><Link href="page-bride-and-groom">Willimes Dom</Link></h6>
									<span className="designation">Bridesmaid</span>
									<ul className="social-icon-two">
										<li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-google-plus"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team2-3.jpg" alt=""/></Link></figure>
									<div className="icon-flower-10"></div>
									<div className="icon-flower-11"></div>
								</div>
								<div className="content-box">
									<h6 className="name"><Link href="page-bride-and-groom">Qarlos Robin</Link></h6>
									<span className="designation">Groomsmen</span>
									<ul className="social-icon-two">
										<li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-google-plus"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team2-4.jpg" alt=""/></Link></figure>
									<div className="icon-flower-10"></div>
									<div className="icon-flower-11"></div>
								</div>
								<div className="content-box">
									<h6 className="name"><Link href="page-bride-and-groom">Peter Parkar</Link></h6>
									<span className="designation">Groomsmen</span>
									<ul className="social-icon-two">
										<li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-google-plus"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-two">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team2-1.jpg" alt=""/></Link></figure>
									<div className="icon-flower-10"></div>
									<div className="icon-flower-11"></div>
								</div>
								<div className="content-box">
									<h6 className="name"><Link href="page-bride-and-groom">Robina Molines</Link></h6>
									<span className="designation">Bridesmaid</span>
									<ul className="social-icon-two">
										<li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-google-plus"></i></Link></li>
										<li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
									</ul>
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
export default Team2
