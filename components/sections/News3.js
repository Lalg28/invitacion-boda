import Link from "next/link"
const News3 = () => {
    return (
        <>
            <section className="news-section-two pt-0">
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <span className="icon icon-green-heart"></span>
                        <span className="sub-title">Recent Article</span>
                        <h2>News & Updates</h2>
                    </div>
                    <div className="row">

                        <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news2-1.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <div className="date">December 14, 2024</div>
                                    <h3 className="title"><Link href="news-details">Couple's wedding <br/> turns emotional as groom stands</Link></h3>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                    <Link href="news-details" className="readmore"><i className="icon fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="news-block-two style-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news2-2.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <div className="date">December 14, 2024</div>
                                    <h3 className="title"><Link href="news-details">Couple's wedding <br/> turns emotional as groom stands</Link></h3>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                    <Link href="news-details" className="readmore"><i className="icon fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="news-block-two style-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news2-3.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <div className="date">December 14, 2024</div>
                                    <h3 className="title"><Link href="news-details">Couple's wedding <br/> turns emotional as groom stands</Link></h3>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                    <Link href="news-details" className="readmore"><i className="icon fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default News3