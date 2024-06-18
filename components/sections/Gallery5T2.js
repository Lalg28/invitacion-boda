import Link from "next/link"
const Gallery5T2 = () => {
    return (
        <>
            <section className="gallery-section-nine">
                <div className="icon-flowers-18 bounce-y"></div>
                <div className="auto-container">
                    <div className="sec-title style-five light">
                        <span className="icon icon-green-heart"></span>
                        <span className="sub-title">Some Beautiful Memories</span>
                        <h2>Beautiful Wedding Clicks</h2>
                    </div>
                    <div className="custom-row">

                        <div className="gallery-block-nine wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery9-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery9-1.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-nine wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery9-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery9-2.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-nine wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery9-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery9-3.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-block-nine wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery9-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery9-4.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-nine wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery9-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery9-5.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gallery-block-nine wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery9-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery9-6.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Gallery5T2