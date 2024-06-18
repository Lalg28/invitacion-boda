import Link from "next/link"
const Team4 = () => {
    return (
        <>
        <section className="team-section-four">
            <div className="auto-container">
                <div className="sec-title style-four text-center">
                    <span className="sub-title">Wedding Friends</span>
                    <h2>The Groomsmen</h2>
                </div>
                <div className="row">
    
                    <div className="team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image overlay-anim"><Link href="page-bride-and-groom"><img src="images/resource/team4-1.jpg" alt=""/></Link></figure>
                                <div className="icon-leaves-17"></div>
                                <div className="icon-leaves-18"></div>
                            </div>
                            <div className="content-box">
                                <h6 className="name"><Link href="page-bride-and-groom">petar Walker</Link></h6>
                                <span className="designation">Groomsmen</span>
                            </div>
                        </div>
                    </div>
    
                    <div className="team-block-four style-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image overlay-anim"><Link href="page-bride-and-groom"><img src="images/resource/team4-2.jpg" alt=""/></Link></figure>
                                <div className="icon-leaves-19"></div>
                                <div className="icon-leaves-20"></div>
                            </div>
                            <div className="content-box">
                                <h6 className="name"><Link href="page-bride-and-groom">Qarlos Robin</Link></h6>
                                <span className="designation">Groomsmen</span>
                            </div>
                        </div>
                    </div>
    
                    <div className="team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image overlay-anim"><Link href="page-bride-and-groom"><img src="images/resource/team4-3.jpg" alt=""/></Link></figure>
                                <div className="icon-leaves-17"></div>
                                <div className="icon-leaves-18"></div>
                            </div>
                            <div className="content-box">
                                <h6 className="name"><Link href="page-bride-and-groom">Rokki Ilues</Link></h6>
                                <span className="designation">Groomsmen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Team4