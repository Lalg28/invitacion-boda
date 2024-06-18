import Link from "next/link"
const Gallery3 = () => {
    return (
        <>
            <section className="gallery-section-five">
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <span className="icon icon-green-heart"></span>
                        <span className="sub-title">Sweet Memories</span>
                        <h2>Wedding Gallery</h2>
                    </div>
                    <div className="row">
                        <div className="gallery-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-1.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-five style-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-2.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-five style-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-3.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-4.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-five style-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-5.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-five style-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-6.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-7.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-7.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-five style-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery5-8.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery5-8.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Gallery3