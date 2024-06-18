import Link from 'next/link';

const Events = () => {
  return (
    <>
    <section className="services-section">
      <div className="auto-container">
        <div className="row"> 
          {/* Services Block */}
          <div className="services-block col-lg-4 wow fadeInUp">
            <div className="inner-box">
              <div className="frame"></div>
              <div className="image-box">
                <figure className="image"><img src="/images/resource/service1-1.jpg" alt="Image"/></figure>
                <span className="icon-shape"></span> <i className="icon flaticon-wedding-arch"></i>
              </div>
              <div className="content-box">
                <h6 className="title"><Link href="#">The Reception</Link></h6>
                <div className="date">December 23, 2024 - Sunday</div>
                <div className="time">2:00 PM – 3:30 PM</div>
                <span className="icon-divider-3"></span>
                <div className="address">Ironic Town gnette,19 West <br/> 21th Str. NY</div>
                <Link href="tel:+1843-853-1810" className="phone">+1 843-853-1810</Link>
              </div>
            </div>
          </div>
          
          {/* Services Block */}
          <div className="services-block col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="frame"></div>
              <div className="image-box">
                <figure className="image"><img src="/images/resource/service1-2.jpg" alt="Image"/></figure>
                <span className="icon-shape"></span> <i className="icon flaticon-marriage"></i>
              </div>
              <div className="content-box">
                <h6 className="title"><Link href="#">The Ceremony</Link></h6>
                <div className="date">December 23, 2024 - Sunday</div>
                <div className="time">2:00 PM – 3:30 PM</div>
                <span className="icon-divider-3"></span>
                <div className="address">Ironic Town gnette,19 West <br/> 21th Str. NY</div>
                <Link href="tel:+1843-853-1810" className="phone">+1 843-853-1810</Link>
              </div>
            </div>
          </div>
          
          {/* Services Block */}
          <div className="services-block col-lg-4 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="frame"></div>
              <div className="image-box">
                <figure className="image"><img src="/images/resource/service1-3.jpg" alt="Image"/></figure>
                <span className="icon-shape"></span> <i className="icon flaticon-musical-notes"></i>
              </div>
              <div className="content-box">
                <h6 className="title"><Link href="#">Music Party</Link></h6>
                <div className="date">December 23, 2024 - Sunday</div>
                <div className="time">2:00 PM – 3:30 PM</div>
                <span className="icon-divider-3"></span>
                <div className="address">Ironic Town gnette,19 West <br/> 21th Str. NY</div>
                <Link href="tel:+1843-853-1810" className="phone">+1 843-853-1810</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default Events
