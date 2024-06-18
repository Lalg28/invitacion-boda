import Link from 'next/link';

const AboutTeam = () => {
  return (
    <>
    <section className="team-section-four">
      <div className="auto-container">
        <div className="sec-title style-four text-center"> <span className="sub-title">Organizers</span>
          <h2 className="font-weight-600">Our Lovly Team</h2>
        </div>
        <div className="row"> 
          {/* Team block */}
          <div className="team-block-four col-lg-4 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="page-team-details"><img src="/images/resource/team4-1.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-17"></div>
                <div className="icon-leaves-18"></div>
              </div>
              <div className="content-box">
                <h6 className="name font-weight-600"><Link href="page-team-details">petar Walker</Link></h6>
                <span className="designation">Lead Assistant</span>
              </div>
            </div>
          </div>
          {/* Team block */}
          <div className="team-block-four style-two col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="page-team-details"><img src="/images/resource/team4-2.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-19"></div>
                <div className="icon-leaves-20"></div>
              </div>
              <div className="content-box">
                <h6 className="name font-weight-600"><Link href="page-team-details">Qarlos Robin</Link></h6>
                <span className="designation">Planner</span>
              </div>
            </div>
          </div>
          {/* Team block */}
          <div className="team-block-four col-lg-4 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image overlay-anim"><Link href="page-team-details"><img src="/images/resource/team4-3.jpg" alt=""/></Link></figure>
                <div className="icon-leaves-17"></div>
                <div className="icon-leaves-18"></div>
              </div>
              <div className="content-box">
                <h6 className="name font-weight-600"><Link href="page-team-details">Rokki Ilues</Link></h6>
                <span className="designation">Executive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default AboutTeam
