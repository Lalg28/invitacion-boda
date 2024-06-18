import Link from 'next/link';

const AboutGallery = () => {
  return (
    <>
    <section className="gallery-section-three">
      <div className="bg bg-pattern-5 bounce-y"></div>
      <div className="auto-container">
        <div className="row"> 
          {/* Left Column */}
          <div className="left-column col-lg-6 wow fadeInLeft">
            <div className="row"> 
              {/* Gallery Block */}
              <div className="gallery-block-three col-sm-6">
                <div className="inner-box">
                  <figure className="image overlay-anim"><Link href="/images/resource/gallery3-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-1.jpg" alt="Image"/></Link></figure>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block-three col-sm-6">
                <div className="inner-box">
                  <figure className="image overlay-anim"><Link href="/images/resource/gallery3-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-2.jpg" alt="Image"/></Link></figure>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block-three col-lg-12">
                <div className="inner-box">
                  <figure className="image overlay-anim"><Link href="/images/resource/gallery3-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-3.jpg" alt="Image"/></Link></figure>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="right-column col-lg-6 wow fadeInRight">
            <div className="row"> 
              {/* Gallery Block */}
              <div className="gallery-block-three col-lg-12">
                <div className="inner-box">
                  <figure className="image overlay-anim"><Link href="/images/resource/gallery3-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-4.jpg" alt="Image"/></Link></figure>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block-three col-sm-6">
                <div className="inner-box">
                  <figure className="image overlay-anim"><Link href="/images/resource/gallery3-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-5.jpg" alt="Image"/></Link></figure>
                </div>
              </div>
              {/* Gallery Block */}
              <div className="gallery-block-three col-sm-6">
                <div className="inner-box">
                  <figure className="image overlay-anim"><Link href="/images/resource/gallery3-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/images/resource/gallery3-6.jpg" alt="Image"/></Link></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>      
    </>
  );
};
export default AboutGallery
