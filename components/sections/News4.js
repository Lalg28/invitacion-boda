import Link from "next/link"
const News4 = () => {
    return (
        <>
    <section className="news-section-three pt-0">
        <div className="auto-container">
            <div className="sec-title style-four text-center">
                <span className="sub-title">News & Updates</span>
                <h2>Recent Updates</h2>
            </div>
            <div className="row">

                <div className="column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="news-block-three wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news3-1.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="category">Photography</div>
                                <h3 className="title"><Link href="news-details">Couple's wedding turns emotional as groom</Link></h3>
                                <div className="text">I'm filled with joy and excitement to be marrying the love of my life.</div>
                                <div className="author-box">
                                    <img src="images/resource/news3-thumb.jpg" alt="Image"/>
                                    <div className="info-box">
                                        <div className="date">December 14, 2024</div>
                                        <h6 className="name">By Thomas Willimes</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="news-block-four wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news3-2.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="category">Photography</div>
                                <h4 className="title"><Link href="news-details">10 Most Effective Tips For Handling Wedding</Link></h4>
                                <div className="author-box">
                                    <img src="images/resource/news3-thumb.jpg" alt="Image"/>
                                    <div className="info-box">
                                        <div className="date">December 14, 2024</div>
                                        <h6 className="name">By Thomas Willimes</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-block-four wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news3-3.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="category">Photography</div>
                                <h4 className="title"><Link href="news-details">Unique Lehenga Color Combinations We Spotted</Link></h4>
                                <div className="author-box">
                                    <img src="images/resource/news3-thumb.jpg" alt="Image"/>
                                    <div className="info-box">
                                        <div className="date">December 14, 2024</div>
                                        <h6 className="name">By Thomas Willimes</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-block-four wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news3-4.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="category">Photography</div>
                                <h4 className="title"><Link href="news-details">Guide to Your Dream Wedding Day!</Link></h4>
                                <div className="author-box">
                                    <img src="images/resource/news3-thumb.jpg" alt="Image"/>
                                    <div className="info-box">
                                        <div className="date">December 14, 2024</div>
                                        <h6 className="name">By Thomas Willimes</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box text-center">
                    <Link href="news-grid" className="theme-btn btn-style-one"><span className="btn-title">View all news</span></Link>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};
export default News4