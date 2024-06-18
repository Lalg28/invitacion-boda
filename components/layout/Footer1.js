import Link from "next/link"

export default function Footer1() {
	return (
	<>
	<footer className="main-footer footer-style-one">
		<div className="bg bg-pattern-3"></div>
		<div className="footer-upper">
			<div className="auto-container">
				<div className="outer-box">
					<div className="upper-left">
						<div className="logo"><img src="images/logo.png" alt="Logo" title="Wendola"/></div>
					</div>
					<div className="upper-center">
						<div className="text">Semper libero, sit amet blandit vel, rhoncus venenatis <br/> luctus pulvinar, hendrerit id, lorem.</div>
					</div>
					<div className="upper-right">
						<ul className="social-icon-one">
							<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
							<li><Link href="#"><i className="fab fa-google"></i></Link></li>
							<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-4 col-lg-4 col-md-5 col-sm-12">
						<div className="footer-widget contact-widget">
							<h6 className="widget-title">Contact Us</h6>
							<div className="widget-content">
								<ul className="contact-list light">
									<li><i className="icon far fa-envelope"></i><Link href="#">username@domain.com</Link></li>
									<li><i className="icon far fa-mobile"></i><Link href="#">+(123) 456 - 7890 - 456 - 7890</Link></li>
									<li><i className="icon far fa-map-marker-alt"></i><Link href="#">Street New York</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-column col-xl-8 col-lg-8 col-md-7 col-sm-12">
						<div className="footer-widget newsletter-widget">
							<h6 className="widget-title">Sign up to Our Newsletter</h6>
							<div className="widgets-content">
								<div className="text">Receive fresh blog content and invites to our webinars.</div>
								<div className="newsletter-form-one">
									<form method="post" action="#">
										<div className="form-group">
											<input type="email" name="email" className="email" placeholder="Enter your email...." required/>
											<button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">Subscribe</span></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
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
