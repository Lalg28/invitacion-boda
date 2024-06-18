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
const Team3 = () => {
	return (
	<>
    <section className="team-section-three pt-0">
        <div className="auto-container">
            <div className="sec-title style-three text-center">
                <span className="icon icon-green-heart"></span>
                <span className="sub-title">Dear Friends and Family</span>
                <h2>We are getting married</h2>
            </div>
            <div className="team-block-outer wow fadeInLeft">
                <div className="row">
                    <div className="image-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="bride-image">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image overlay-anim"><img src="images/resource/team3-1.jpg" alt=""/></figure>
                                        <div className="icon-leaves-8 wow zoom-two"></div>
                                        <div className="icon-leaves-9 wow zoom-two wow" data-wow-delay="3s"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            
                    <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="team-info-box">
                                <h2 className="name">Olivia <span className="designation">The Bride</span></h2>
                                <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                                <ul className="social-icon-two">
                                    <li><Link href="#"><i className="icon fab fa-facebook"></i></Link></li>
                                    <li><Link href="#"><i className="icon fab fa-google"></i></Link></li>
                                    <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                            <div className="carousel-outer">
								<Swiper {...swiperOptions} className="team-carousel owl-carousel owl-theme disable-navs disable-dots">
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-2.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Willimes Dom</Link></div>
													<div className="designation">Bridesmaid</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-3.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Jessica Jess</Link></div>
													<div className="designation">Bridesmaid</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-4.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Moniqa Ron</Link></div>
													<div className="designation">Bridesmaid</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-2.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Willimes Dom</Link></div>
													<div className="designation">Bridesmaid</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-block-outer style-two mb-0 wow fadeInRight" data-wow-delay="300ms">
                <div className="row">
                    <div className="image-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="groom-image">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><img src="images/resource/team3-8.jpg" alt=""/></figure>
                                    <div className="icon-leaves-8"></div>
                                    <div className="icon-leaves-9"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="team-info-box">
                                <h2 className="name">Peter <span className="designation">The Groom</span></h2>
                                <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                                <ul className="social-icon-two">
                                    <li><Link href="#"><i className="icon fab fa-facebook"></i></Link></li>
                                    <li><Link href="#"><i className="icon fab fa-google"></i></Link></li>
                                    <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                            <div className="carousel-outer">
								<Swiper {...swiperOptions} className="team-carousel owl-carousel owl-theme disable-navs disable-dots">
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-5.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Thomas Willime</Link></div>
													<div className="designation">Groomsmen</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-6.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Romin Noman</Link></div>
													<div className="designation">Groomsmen</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-7.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Qlark Robik</Link></div>
													<div className="designation">Groomsmen</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-block-three">
											<div className="inner-box">
												<div className="image-box">
													<figure className="image"><Link href="page-bride-and-groom"><img src="images/resource/team3-5.jpg" alt="Image"/></Link></figure>
													<div className="team3-frame"></div>
												</div>
												<div className="info-box">
													<div className="name"><Link href="page-bride-and-groom">Thomas Willime</Link></div>
													<div className="designation">Groomsmen</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	</>
	);
};
export default Team3
