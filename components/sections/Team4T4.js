import Link from "next/link"
const Team4T4 = () => {
    return (
        <>
            <section className="team-section-four pt-0">
                <div className="auto-container">
                    <div className="sec-title style-four text-center">
                        <span className="sub-title">Wedding Friends</span>
                        <h2>The Bridemaids</h2>
                    </div>
                    <div className="row">

                        <div className="team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="page-bride-and-groom"><img src="images/resource/team4-4.jpg" alt=""/></Link></figure>
                                    <div className="icon-leaves-17"></div>
                                    <div className="icon-leaves-18"></div>
                                </div>
                                <div className="content-box">
                                    <h6 className="name"><Link href="page-bride-and-groom">Jessica Loran</Link></h6>
                                    <span className="designation">Bridemaids</span>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-four style-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="page-bride-and-groom"><img src="images/resource/team4-5.jpg" alt=""/></Link></figure>
                                    <div className="icon-leaves-19"></div>
                                    <div className="icon-leaves-20"></div>
                                </div>
                                <div className="content-box">
                                    <h6 className="name"><Link href="page-bride-and-groom">Moniqa Romi</Link></h6>
                                    <span className="designation">Bridemaids</span>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="page-bride-and-groom"><img src="images/resource/team4-6.jpg" alt=""/></Link></figure>
                                    <div className="icon-leaves-17"></div>
                                    <div className="icon-leaves-18"></div>
                                </div>
                                <div className="content-box">
                                    <h6 className="name"><Link href="page-bride-and-groom">Biquioo Olive</Link></h6>
                                    <span className="designation">Bridemaids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Team4T4