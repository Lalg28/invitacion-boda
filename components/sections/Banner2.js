const Banner2 = () => {
    return (
        <>
        <section className="banner-section-two">
            <div className="icon-flowers-1 bounce-y"></div>
            <div className="icon-flowers-2 bounce-y wow" data-wow-delay="4s"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInUp">
                        <div className="inner-column">
                            <span className="sub-title wow fadeInUp" data-wow-delay="900ms">Stepping Into Forever</span>
                            <h2 className="name wow fadeInUp" data-wow-delay="1200ms">Jessica Loran <br/> <span>&</span> <br/> Thomas Walkar</h2>
                            <div className="date wow fadeInUp" data-wow-delay="1500ms">DEC 12th, 2022</div>
                            <div className="address wow fadeInUp" data-wow-delay="1800ms"><i className="icon fa fa-map-marker-alt"></i>Bell View Peter United State</div>
                        </div>
                    </div>
                    <div className="image-column col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image"><img src="images/banner/banner2-1.jpg" alt="Image"/></figure>
                            </div>
                        </div>
                    </div>
                    <div className="image-column style-two col-lg-3 col-md-6 col-sm-12 order-lg-3 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image"><img src="images/banner/banner2-2.jpg" alt="Image"/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Banner2