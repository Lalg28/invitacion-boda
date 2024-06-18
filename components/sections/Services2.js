import Link from "next/link"
const Services2 = () => {
    return (
        <>
        <section className="services-section-two">
            <div className="auto-container">
                <div className="row">
                    <div className="services-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="page-events"><img src="images/resource/services2-1.png" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <span className="sub-title">Venue</span>
                                <h4 className="title"><Link href="page-events">The Orchard</Link></h4>
                                <div className="text">At the base of Mt Warning, lies <br/> a beautiful macadamia.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="services-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-events"><img src="images/resource/services2-2.png" alt="Image"/></Link></figure>
                                </div>
                            <div className="content-box">
                                <span className="sub-title">Dining</span>
                                <h4 className="title"><Link href="page-events">Lunch Together</Link></h4>
                                <div className="text">At the base of Mt Warning, lies <br/> a beautiful macadamia.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="services-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-events"><img src="images/resource/services2-3.png" alt="Image"/></Link></figure>
                                </div>
                            <div className="content-box">
                                <span className="sub-title">After Party</span>
                                <h4 className="title"><Link href="page-events">Photography</Link></h4>
                                <div className="text">At the base of Mt Warning, lies <br/> a beautiful macadamia.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Services2