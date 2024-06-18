import Link from "next/link";

const PricingTable = () => {
  return (
    <>
  <section className="pricing-section">
    <div className="auto-container">
      <div className="row">
        {/* Pricing Block */}
        <div className="pricing-block col-md-6">
          <div className="inner-box">
            <div className="icon-flower-29"></div>
            <div className="image-box">
              <figure className="image overlay-anim"><img src="/images/resource/price1-1.jpg" alt="Image"/></figure>
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
                <Link href="#" className="theme-btn btn-style-one orange-bg"><span className="btn-title">Get Package</span></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing Block */}
        <div className="pricing-block col-md-6">
          <div className="inner-box">
            <div className="icon-flower-29"></div>
            <div className="image-box">
              <figure className="image  overlay-anim"><img src="/images/resource/price1-2.jpg" alt="Image"/></figure>
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
                <Link href="#" className="theme-btn btn-style-one orange-bg"><span className="btn-title">Get Package</span></Link>
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
export default PricingTable
