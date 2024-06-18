import Link from "next/link"
const Services1 = () => {
    return (
        <>
            <section className="services-section" id="itinerario">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <div className="icon-divider"></div>
                        <span className="sub-title">Arreglos de boda</span>
                        <h2>Organización</h2>
                    </div>
                    <div className="row">
                        <div className="services-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="frame"></div>
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/service-3.jpg" alt="Image"/></figure>
                                    <span className="icon-shape"></span>
                                    <i className="icon flaticon-wedding-arch"></i>
                                </div>
                                <div className="content-box">
                                    <h6 className="title"><Link href="page-events">La recepción</Link></h6>
                                    <div className="date">Sábado 27 de Julio del 2024</div>
                                    <div className="time">7:00 PM – 8:00 PM</div>
                                    <span className="icon-divider-3"></span>
                                    <div className="address">Cafenea 40 <br/> Tlaquepaque, Jalisco</div>
                                    <Link href="https://maps.app.goo.gl/tmxYwxrrFyyYZqh6A" target="_blank" className="phone">Ver ubicación</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="services-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="frame"></div>
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/service-1.jpg" alt="Image"/></figure>
                                    <span className="icon-shape"></span>
                                    <i className="icon flaticon-marriage"></i>
                                </div>
                                <div className="content-box">
                                    <h6 className="title"><Link href="page-events">La ceremonia</Link></h6>
                                    <div className="date">Sábado 27 de Julio del 2024</div>
                                    <div className="time">8:30 PM – 9:30 PM</div>
                                    <span className="icon-divider-3"></span>
                                    <div className="address">Cafenea 40 <br/> Tlaquepaque, Jalisco</div>
                                    <Link href="https://maps.app.goo.gl/tmxYwxrrFyyYZqh6A" target="_blank" className="phone">Ver ubicación</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="services-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="frame"></div>
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/service-2.jpg" alt="Image"/></figure>
                                    <span className="icon-shape"></span>
                                    <i className="icon flaticon-musical-notes"></i>
                                </div>
                                <div className="content-box">
                                    <h6 className="title"><Link href="page-events">Cena</Link></h6>
                                    <div className="date">Sábado 27 de Julio del 2024</div>
                                    <div className="time">9:30 PM – 11:59 PM</div>
                                    <span className="icon-divider-3"></span>
                                    <div className="address">Cafenea 40 <br/> Tlaquepaque, Jalisco</div>
                                    <Link href="https://maps.app.goo.gl/tmxYwxrrFyyYZqh6A" target="_blank" className="phone">Ver ubicación</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services1