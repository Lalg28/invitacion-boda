import Link from "next/link";

const Invitation3 = () => {
  return (
    <>
    <section className="banner-section-three">
      <div className="icon-bubbles-2"></div>
      <div className="icon-leaves-23 bounce-x"></div>
      <div className="icon-leaves-24 bounce-y"></div>
      <div className="bg-image wow fadeIn" data-wow-delay="1500ms">
        <img src="/images/banner/banner-3.png" alt="Image"/>
      </div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-5 col-md-12 col-sm-12 wow fadeInLeft">
            <div className="inner-column">
              <div className="date script-font-family wow fadeInUp">Save The Date</div>
              <div className="name wow fadeInUp" data-wow-delay="300ms">Olivia <br/> <span className="icon-heart-2"></span> <br/> Peter</div>
              <div className="text wow fadeInUp" data-wow-delay="600ms">ONE O’CLOCK IN THE AFTERNOON <br/> THE WHITE CHURCH</div>
              <div className="date wow fadeInUp" data-wow-delay="900ms">12. 12. 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default Invitation3
