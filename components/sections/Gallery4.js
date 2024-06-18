import Link from "next/link"
const Gallery4 = () => {
    return (
        <>
    <section className="gallery-section-seven">
        <div className="icon-leaves-21 bounce-y"></div>
        <div className="icon-leaves-22 bounce-y wow" data-wow-delay="5s"></div>
        <div className="auto-container">
            <div className="outer-container">
                <div className="sec-title style-four">
                    <span className="sub-title">some beautiful memories</span>
                    <h2>Wedding Clicks</h2>
                    <Link href="#" className="view-all">View all photos <i className="icon fa fa-angle-right"></i></Link>
                </div>
            </div>
            <div className="row g-0">
                <div className="gallery-block-seven style-two col-lg-4 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image overlay-anim"><Link href="images/resource/gallery7-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery7-1.jpg" alt="Image"/></Link></figure>
                        </div>
                    </div>
                </div>
            
                <div className="gallery-block-seven col-lg-4 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image overlay-anim"><Link href="images/resource/gallery7-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery7-2.jpg" alt="Image"/></Link></figure>
                        </div>
                    </div>
                </div>
            
                <div className="gallery-block-seven style-two col-lg-4 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image overlay-anim"><Link href="images/resource/gallery7-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery7-3.jpg" alt="Image"/></Link></figure>
                        </div>
                    </div>
                </div>
            
                <div className="gallery-block-seven col-lg-4 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image overlay-anim"><Link href="images/resource/gallery7-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery7-4.jpg" alt="Image"/></Link></figure>
                        </div>
                    </div>
                </div>
            
                <div className="gallery-block-seven style-two col-lg-4 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image overlay-anim"><Link href="images/resource/gallery7-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery7-5.jpg" alt="Image"/></Link></figure>
                        </div>
                    </div>
                </div>
            
                <div className="gallery-block-seven col-lg-4 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image overlay-anim"><Link href="images/resource/gallery7-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery7-6.jpg" alt="Image"/></Link></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};
export default Gallery4