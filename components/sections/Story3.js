import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Story3 = () => {
	return (
	<>
		<section className="story-section pull-down">
			<div className="anim-icons full-width">
				<span className="icon icon-flowers-10 bounce-y"></span>
				<span className="icon icon-flowers-11 bounce-y wow" data-wow-delay="3s"></span>
			</div>
				
			<div className="auto-container">
				<div className="sec-title style-three text-center">
					<span className="icon icon-green-heart"></span>
					<span className="sub-title">Our Story</span>
					<h2>Sweet love Story</h2>
				</div>
				
				<div className="row">
					
					<div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft">
						<div className="story-block">
							<div className="inner-box">
								<div className="content-box">
									<div className="date">December 23, 2023</div>
									<h4 className="title">First Time <br/> We Meet</h4>
									<div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
								</div>
							</div>
						</div>
						
						<div className="icon-heart-4"></div>
						
						<div className="story-block">
							<div className="inner-box">
								<div className="content-box">
									<div className="date">December 23, 2023</div>
									<h4 className="title">Our First <br/> Date</h4>
									<div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
								</div>
							</div>
						</div>
					</div>

					<div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInRight order-xl-3">
						<div className="story-block ">
							<div className="inner-box">
								<div className="content-box">
									<div className="date">December 23, 2023</div>
									<h4 className="title">She said <br/> yes</h4>
									<div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
								</div>
							</div>
						</div>

						<div className="icon-heart-4"></div>
						
						<div className="story-block ">
							<div className="inner-box">
								<div className="content-box">
									<div className="date">December 23, 2023</div>
									<h4 className="title">Get love <br/>married</h4>
									<div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
						<Swiper slidesPerView={1} spaceBetween={0} autoplay={{ delay: 2000, disableOnInteraction: false,}} pagination={{clickable: true}} modules={[Autoplay, Navigation, Pagination]} className="single-item-carousel">
			              <SwiperSlide>
			                <div className="image-box">
			                  <figure className="image"><img src="/images/resource/story1-1.png" alt="Image"/></figure>
			                </div>
			              </SwiperSlide>
			              <SwiperSlide>
			                <div className="image-box">
			                  <figure className="image"><img src="/images/resource/story1-2.png" alt="Image"/></figure>
			                </div>
			              </SwiperSlide>
			              <SwiperSlide>
			                <div className="image-box">
			                  <figure className="image"><img src="/images/resource/story1-1.png" alt="Image"/></figure>
			                </div>
			              </SwiperSlide>
			              <SwiperSlide>
			                <div className="image-box">
			                  <figure className="image"><img src="/images/resource/story1-2.png" alt="Image"/></figure>
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
export default Story3
