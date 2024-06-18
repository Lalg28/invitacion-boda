import Link from "next/link"
const Gallery1 = () => {
    return (
        <>
        <section className="gallery-section">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="bg bg-pattern-2"></div>
                    <div className="sec-title light text-center wow fadeInUp">
                        <span className="sub-title">Wedding Gallery</span>
                        <h2>Memories</h2>
                    </div>
                    <div className="images-box">
                        <figure className="image image-1 wow zoomIn" data-wow-delay="300ms"><Link href="images/resource/gallery1-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery1-1.jpg" alt="Image"/></Link></figure>
                        <figure className="image image-2 wow zoomIn" data-wow-delay="600ms"><Link href="images/resource/gallery1-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery1-2.jpg" alt="Image"/></Link></figure>
                        <figure className="image image-3 wow zoomIn" data-wow-delay="900ms"><Link href="images/resource/gallery1-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery1-3.jpg" alt="Image"/></Link></figure>
                        <figure className="image image-4 wow zoomIn" data-wow-delay="1200ms"><Link href="images/resource/gallery1-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery1-4.jpg" alt="Image"/></Link></figure>
                        <figure className="image image-5 wow zoomIn" data-wow-delay="1500ms"><Link href="images/resource/gallery1-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery1-5.jpg" alt="Image"/></Link></figure>
                        <figure className="image image-6 wow zoomIn" data-wow-delay="1800ms"><Link href="images/resource/gallery1-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery1-6.jpg" alt="Image"/></Link></figure>
                        <figure className="image image-7 wow zoomIn" data-wow-delay="2100ms"><Link href="images/resource/gallery1-7.jpg" className="lightbox-image" data-fancybox="gallery"><img src="images/resource/gallery1-7.jpg" alt="Image"/></Link></figure>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Gallery1