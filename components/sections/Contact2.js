import Link from "next/link"
const Contact2 = () => {
    return (
        <>
        <section className="contact-section-two">
            <div className="icon-leaves-7 bounce-y"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="icon-circle-star"></div>
                            <div className="contact-form-two wow fadeInLeft">
                                <div className="icon-flower-8"></div>
                                <div className="icon-flower-9"></div>
                                <figure className="image text-center"><img src="images/icons/icon-circle-star.png" alt="Image"/></figure>
                                <h3 className="title">Are You Attending?</h3>
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
                                            <button className="theme-btn btn-style-two yellow-bg" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-xl-7 col-lg-6 col-md-12 wow fadeInRight" data-wow-delay="200ms">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim"><Link href="images/resource/contact2-1.jpg" className="lightbox-image" data-fancybox=""><img src="images/resource/contact2-1.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <figure className="image"><img src="images/icons/icon-cone.png" alt="Image"/></figure>
                                <div className="title-box">
                                    <h4 className="title">We Are Getting Married!</h4>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/>. Nunc, egestas luctus hendrerit maecenas.</div>
                                    <Link className="theme-btn btn-style-two" href="page-about"><span className="btn-title">Discover Now</span></Link>
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
export default Contact2