import Link from "next/link"
const Contact3 = () => {
    return (
        <>
        <section className="contact-section-three">
            <div className="icon-flower-25"></div>
            <div className="auto-container">
                <div className="row">

                    <div className="contact-block col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft">
                        <div className="inner-box">
                            <i className="icon flaticon-wedding-arch"></i>
                            <h4 className="title">The Reception</h4>
                            <div className="date">December 23, 2024 - Sunday <br/> <span>2:00 PM – 3:30 PM</span></div>
                            <div className="icon-heart-5"></div>
                            <div className="address">Town 2341 Walori,19 West <br/> 21th Str. NY <br/> <Link href="+1843-853-1810" className="number">+1 843-853-1810</Link></div>
                        </div>
                    </div>

                    <div className="contact-block right col-xl-4 col-lg-6 col-md-6 col-sm-12 order-xl-2 wow fadeInRight">
                        <div className="inner-box">
                            <i className="icon flaticon-wedding-ring"></i>
                            <h4 className="title">The Ceremony</h4>
                            <div className="date">December 23, 2024 - Sunday <br/> <span>2:00 PM – 3:30 PM</span></div>
                            <div className="icon-heart-5"></div>
                            <div className="address">Town 2341 Walori,19 West <br/> 21th Str. NY <br/> <Link href="+18438531810" className="number">+1 843-853-1810</Link></div>
                        </div>
                    </div>
                    
                    <div className="form-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="contact-form-three wow fadeInUp">
                                <h6 className="title">Are you Attending? </h6>

                                <form method="post" action="get" id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <label className="custom-radio-box">Yes, I will be there
                                                <input type="radio" name="radio"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <label className="custom-radio-box">Sorry, I can’t come
                                                <input type="radio" name="radio"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <div className="input-outer">
                                                <input type="text" name="name" placeholder="Complete Name" required/>
                                            </div>
                                        </div>
                            
                                        <div className="form-group col-lg-12">
                                            <div className="input-outer">
                                                <input type="email" name="email" placeholder="Email Address" required/>
                                            </div>
                                        </div>
                            
                                        <div className="form-group col-lg-12">
                                            <div className="input-outer">
                                                <input type="text" name="number" placeholder="Number of Guests" required/>
                                            </div>
                                        </div>

                                        <div className="form-group col-lg-12">
                                            <div className="input-outer">
                                                <textarea name="message" placeholder="Notes" required></textarea>
                                            </div>
                                        </div>
                        
                                        <div className="form-group text-center col-lg-12">
                                            <button className="theme-btn btn-style-two green-bg" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Contact3