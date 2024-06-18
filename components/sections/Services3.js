import Link from "next/link"
const Services3 = () => {
    return (
        <>
        <section className="services-section-three pt-0">
            <div className="icon-flowers-9 zoom-one"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="services-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="images/resource/service3-1.jpg" alt="Image"/></figure>
                                <div className="info-box">
                                    <i className="icon flaticon-birthday-girl"></i>
                                    <div className="date">12. 12. 2024</div>
                                    <div className="text">Venue at Lucy Forks, Patriciafur, United States.</div>
                                    <div className="btn-box">
                                        <Link href="page-rsvp" className="theme-btn btn-style-one green"><span className="btn-title">RSVP</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="images/resource/service3-2.jpg" alt="Image"/></figure>
                                <div className="info-box">
                                    <i className="icon flaticon-arch"></i>
                                    <div className="date">12. 12. 2024</div>
                                    <div className="text">Venue at Lucy Forks, Patriciafur, United States.</div>
                                    <div className="btn-box">
                                        <Link href="page-rsvp" className="theme-btn btn-style-one green"><span className="btn-title">RSVP</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-block-three col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="images/resource/service3-3.jpg" alt="Image"/></figure>
                                <div className="info-box">
                                    <i className="icon flaticon-cheers"></i>
                                    <div className="date">12. 12. 2024</div>
                                    <div className="text">Venue at Lucy Forks, Patriciafur, United States.</div>
                                    <div className="btn-box">
                                        <Link href="page-rsvp" className="theme-btn btn-style-one green"><span className="btn-title">RSVP</span></Link>
                                    </div>
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
export default Services3