import Link from "next/link"
const Gallery2 = () => {
    return (
        <>
        <section className="gallery-section-three">
            <div className="bg bg-pattern-5 bounce-y"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="left-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                        <div className="sec-title style-two">
                            <span className="sub-title">Sweet Memories</span>
                            <h2 className="title">Our Captured Moment</h2>
                        </div>
                        <div className="row">
                            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery3-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery3-1.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                            
                            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery3-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery3-2.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                            
                            <div className="gallery-block-three col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery3-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery3-3.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
                        <div className="row">
                            
                            <div className="gallery-block-three col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery3-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery3-4.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>

                            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery3-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery3-5.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                            
                            <div className="gallery-block-three col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="images/resource/gallery3-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery3-6.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>

                            <div className="text-block col-lg-12">
                                <div className="text">“ We Loved with a love that was more  than love ”</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Gallery2