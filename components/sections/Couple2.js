import Link from "next/link"
const Couple2 = () => {
    return (
        <>
            <section className="couple-section-two pt-0">
                <div className="icon-leave-4 bounce-y wow " data-wow-delay="3s"></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="couple-image-block col-xl-4 col-lg-4 col-md-12 col-sm-12 order-lg-2 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><img src="images/resource/couple2-2.jpg" alt="Image"/></figure>
                                    <div className="icon-flower-3 bounce-y"></div>
                                    <div className="icon-flower-4 bounce-y wow" data-wow-delay="3s"></div>
                                </div>
                            </div>
                        </div>

                        <div className="couple-block-two style-two col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-about"><img src="images/resource/couple2-1.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <span className="designation">The Bride</span>
                                    <h4 className="name"><Link href="page-about">Jessica Loran</Link></h4>
                                    <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                                </div>
                            </div>
                        </div>

                        <div className="couple-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12 order-lg-3 wow fadeInRight" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-about"><img src="images/resource/couple2-3.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <span className="designation">The Groom</span>
                                    <h4 className="name"><Link href="page-about">Thomas Walkar</Link></h4>
                                    <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Couple2