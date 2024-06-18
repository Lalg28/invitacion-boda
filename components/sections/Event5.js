import Link from "next/link"
const Event5 = () => {
    return (
        <>
            <section className="event-section-three pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title style-five">
                                    <span className="sub-title">Welcome to Wendola</span>
                                    <h2>Plan the Beautiful <br/> Wedding Event</h2>
                                    <div className="text">From the vibrant flowers and trees to the gently flowing streams, <br/> this park provides the perfect backdrop for this joyous occasion. <br/> As we stand here today, surrounded by the beauty of this park, <br/> we are reminded of the enduring power of love.</div>
                                </div>

                                <div className="info-block">
                                    <div className="inner">
                                        <h4 className="title">Experience:</h4>
                                        <div className="text">17 Years experience of wedding shopping and planning.</div>
                                    </div>
                                </div>
                                <div className="info-block">
                                    <div className="inner">
                                        <h4 className="title">Event Plans:</h4>
                                        <div className="text">Event planning involves the coordination of every detail of events <br/> such as meetings, conventions, trade shows, ceremony, retreats, <br/> or parties.</div>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link href="page-contact" className="theme-btn btn-style-one orange-bg"><span className="btn-title">Book an Appointment</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="image-column col-xl-6 col-lg-6">
                            <div className="inner-column wow fadeInRight">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/event3-1.jpg" alt="Image"/></figure>
                                <figure className="image-2 overlay-anim wow fadeInLeft"><img src="images/resource/event3-2.jpg" alt="Image"/></figure>
                                <div className="icon-leaves-30 bounce-y"></div>
                                <div className="icon-leaves-31 bounce-y"></div>
                                <div className="icon-leaves-32 bounce-x"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Event5