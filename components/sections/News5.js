import Link from "next/link"
const News5 = () => {
    return (
        <>
            <section className="news-section-five">
                <div className="icon-flowers-19 bounce-y"></div>
                <div className="icon-flowers-20 bounce-y"></div>
                <div className="auto-container">
                    <div className="sec-title style-five text-center">
                        <span className="sub-title">Recent Articles</span>
                        <h2>News & Updates</h2>
                        <div className="icon-leaves-36"></div>
                    </div>
            
                    <div className="row">
                        <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-flower-30"></div>
                                <div className="content-box">
                                    <div className="date">December 14, 2024</div>
                                    <h4 className="title"><Link href="news-details">Couple's wedding turns emotional as groom stands for first time</Link></h4>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news5-1.jpg" alt="Image"/></Link></figure>
                                    <div className="name">by <span>thomas willimes</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="date">December 14, 2024</div>
                                    <h4 className="title"><Link href="news-details">Couple's wedding turns emotional as groom stands for first time</Link></h4>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news5-1.jpg" alt="Image"/></Link></figure>
                                    <div className="name">by <span>thomas willimes</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="date">December 14, 2024</div>
                                    <h4 className="title"><Link href="news-details">Couple's wedding turns emotional as groom stands for first time</Link></h4>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news5-1.jpg" alt="Image"/></Link></figure>
                                    <div className="name">by <span>thomas willimes</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-box text-center">
                        <h3 className="title">Take a look at Real Life Weddings and hints, tips and <br/> advice for finding the perfect wedding venue</h3>
                        <div className="btn-box">
                            <Link href="page-events" className="theme-btn btn-style-one orange-bg"><span className="btn-title">View All Venue</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default News5