import Link from "next/link"
const News2 = () => {
    return (
        <>
            <section className="news-section">
                <div className="icon-leave-4 bounce-y"></div>
                <div className="icon-flower-12 zoom-one"></div>
                <div className="auto-container">
                    <div className="sec-title text-center style-two">
                        <span className="sub-title">News and updates</span>
                        <h2>Recent Updates</h2>
                    </div>
                    
                    <div className="news-block wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news1-1.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="date"><span>24</span>December 2024</div>
                                <div className="title-box">
                                    <h6 className="title"><Link href="news-details">Couple's wedding <br/> turns emotional as <br/> groom stands</Link></h6>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="news-block style-two wow fadeInUp" data-wow-delay="200ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news1-2.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="date"><span>24</span>December 2024</div>
                                <div className="title-box">
                                    <h6 className="title"><Link href="news-details">Photography is the <br/> important part of <br/> wedding.</Link></h6>
                                    <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box text-center">
                        <Link href="news-grid" className="theme-btn btn-style-two yellow-bg"><span className="btn-title">View all News</span></Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default News2