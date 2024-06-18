import Link from "next/link"

export default function Footer2() {
  return (
  <>
  <footer className="main-footer footer-style-two">
    <div className="icon-flowers-8"></div>
    <div className="icon-flowers-8 style-two"></div>
    <div className="icon-flower-24"></div>
    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">
          <div className="footer-column col-xl-6 col-lg-4 col-md-6 col-sm-12 order-xl-1">
            <div className="footer-widget about-widget">
              <div className="widget-content">
                <div className="logo"><Link href="/"><img src="/images/logo-3.png" alt="" title="Wendola"/></Link></div>
                <div className="text">Semper libero, sit amet blandit vel, rh <br/> oncus venenatis luctus pulvinar, hend <br/> rerit id, lorem.</div>
              </div>
            </div>
          </div>

          <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget contact-widget">
              <h6 className="widget-title">Contact Information</h6>
              <div className="widget-content">
                <ul className="contact-list-two">
                  <li><i className="icon fa fa-envelope"></i><Link href="#">username@domain.com</Link></li>
                  <li><i className="icon fa fa-mobile"></i><Link href="#">+(123) 456 - 7890 - 456 - 7890</Link></li>
                  <li><i className="icon fa fa-map-marker-alt"></i><Link href="#">Street New York</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12 order-lg-2">
            <div className="footer-widget icons-widget">
              <h6 className="widget-title">Social Networking</h6>
              <div className="widgets-content">
                <ul className="social-icon-one">
                  <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#"><i className="icon fab fa-google-plus"></i></Link></li>
                  <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                </ul>
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
