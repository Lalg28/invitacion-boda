import Link from "next/link"
const Event2 = () => {
    return (
        <>
        <section className="event-section-two">
            <div className="anim-icons full-width">
                <div className="icon-flowers-6 bounce-y"></div>
                <div className="icon-leaves-5 bounce-x"></div>
                <div className="icon-leaves-6 bounce-x"></div>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center style-two">
                    <span className="sub-title">Wedding FRIDAY TO SUNDAY</span>
                    <h2>Ceremony Timeline</h2>
                </div>
                <div className="row">
                
                    <div className="event-block-two wow fadeInRight">
                        <div className="inner-box">
                            <div className="date-column">
                                <div className="date-box">
                                    <div className="date"><span>12</span>November</div>
                                    <div className="icon-flower-6"></div>
                                    <div className="icon-flower-7"></div>
                                </div>
                            </div>

                            <div className="image-column">
                                <div className="image-box">
                                    <figure className="image"><Link href="images/resource/event2-2.jpg" className="lightbox-image"><img src="images/resource/event2-2.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                        
                            <div className="content-column">
                                <div className="content-box">
                                    <div className="time"><i className="icon far fa-clock"></i> <p>AT 02:00 PM</p></div>
                                    <h4 className="title"><Link href="page-events">Wedding Reception</Link></h4>
                                    <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="event-block-two style-two wow fadeInLeft" data-wow-delay="200ms">
                        <div className="inner-box">
                            <div className="date-column">
                                <div className="date-box">
                                    <div className="date"><span>13</span>November</div>
                                    <div className="icon-flower-6"></div>
                                    <div className="icon-flower-7"></div>
                                </div>
                            </div>
                            <div className="image-column">
                                <div className="image-box">
                                    <figure className="image"><Link href="images/resource/event2-1.jpg" className="lightbox-image"><img src="images/resource/event2-1.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="content-box">
                                    <div className="time"><i className="icon far fa-clock"></i> <p>AT 04:00 PM</p></div>
                                    <h4 className="title"><Link href="page-events">Now let's Party</Link></h4>
                                    <div className="text">From the vibrant flowers and trees to the gently flowing  streams, this park provides the perfect backdrop for this joyous occasion.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="event-block-two wow fadeInRight" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="date-column">
                                <div className="date-box">
                                    <div className="date"><span>14</span>November</div>
                                    <div className="icon-flower-6"></div>
                                    <div className="icon-flower-7"></div>
                                </div>
                            </div>
                            <div className="image-column">
                                <div className="image-box">
                                    <figure className="image"><Link href="images/resource/event2-3.jpg" className="lightbox-image"><img src="images/resource/event2-3.jpg" alt="Image"/></Link></figure>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="content-box">
                                    <div className="time"><i className="icon far fa-clock"></i> <p>AT 02:00 PM</p></div>
                                    <h4 className="title"><Link href="page-events">Wedding Reception</Link></h4>
                                    <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.</div>
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
export default Event2