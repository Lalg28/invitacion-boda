import Link from 'next/link';

const NewsGrid = () => {
  return (
    <>
    <section className="news-section pb-70">
      <div className="icon-leave-4 bounce-y"></div>
      <div className="icon-flower-12 zoom-one"></div>
      <div className="auto-container"> 
        {/* News Block */}
        <div className="news-block wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news1-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="date"><span>24</span>December 2024</div>
              <div className="title-box">
                <h6 className="title"><a href="news-details">Couple's wedding <br/> turns emotional as <br/> groom stands</a></h6>
                <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
              </div>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block style-two wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="news-details"><img src="/images/resource/news1-2.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="date"><span>24</span>December 2024</div>
              <div className="title-box">
                <h6 className="title"><a href="news-details">Photography is the <br/> important part of <br/> wedding.</a></h6>
                <div className="text">I'm filled with joy and excitement to be <br/> marrying the love of my life.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default NewsGrid
