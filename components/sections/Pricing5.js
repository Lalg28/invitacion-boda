import Link from "next/link"
const Pricing5 = () => {
	return (
	<>
		<section className="pricing-section pt-0">
			<div className="auto-container">
				<div className="sec-title style-five text-center">
					<span className="sub-title">Wedding Pricing Plans</span>
					<h2>Best Pricing Packages</h2>
					<div className="icon-leaves-36"></div>
				</div>
				<div className="row">

					<div className="pricing-block col-xl-6 col-lg-6 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="icon-flower-29"></div>
							<div className="image-box">
								<figure className="image overlay-anim"><img src="images/resource/price1-1.jpg" alt="Image"/></figure>
							</div>

							<div className="content-box">
								<h4 className="title">Full Wedding</h4>
								<ul className="features-list">
									<li><i className="fa-solid fa-check"></i>Blairquhan Castle</li>
									<li><i className="fa-solid fa-check"></i>Three-course wedding meal</li>
									<li><i className="fa-solid fa-check"></i>Evening buffet with tea</li>
									<li><i className="fa-solid fa-check"></i>One wedding per day</li>
									<li><i className="fa-solid fa-check"></i>Regency architecture</li>
								</ul>
								<h4 className="price">$3400<span>/1 Night Package</span></h4>
								<div className="btn-box">
									<Link href="page-pricing" className="theme-btn btn-style-one orange-bg"><span className="btn-title">Get Package</span></Link>
								</div>
							</div>
						</div>
					</div>

					<div className="pricing-block col-xl-6 col-lg-6 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="icon-flower-29"></div>
							<div className="image-box">
								<figure className="image  overlay-anim"><img src="images/resource/price1-2.jpg" alt="Image"/></figure>
							</div>

							<div className="content-box">
								<h4 className="title">Religious Wedding</h4>
								<ul className="features-list">
									<li><i className="fa-solid fa-check"></i>Blairquhan Castle</li>
									<li><i className="fa-solid fa-check"></i>Three-course wedding meal</li>
									<li><i className="fa-solid fa-check"></i>Evening buffet with tea</li>
									<li><i className="fa-solid fa-check"></i>One wedding per day</li>
									<li><i className="fa-solid fa-check"></i>Regency architecture</li>
								</ul>
								<h4 className="price">$3400<span>/1 Night Package</span></h4>
								<div className="btn-box">
									<Link href="page-pricing" className="theme-btn btn-style-one orange-bg"><span className="btn-title">Get Package</span></Link>
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
export default Pricing5
