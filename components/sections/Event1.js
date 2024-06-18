import Link from "next/link"
const Event1 = () => {
    return (
        <>
            <section className="event-section" id="ceremonia">
                <div className="anim-icons full-width">
                    <div className="icon-flowers-3 bounce-y"></div>
                    <div className="icon-shape-1 bounce-y"></div>
                    <span className="icon-circle zoom-two"></span>
                    <span className="float-text">A&A</span>
                </div>
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Bienvenido a la hermosa terraza de Cafenea 40</span>
                        <h2>Boda Civil</h2>
                    </div>
                    <div className="row">
                    
                        <div className="event-block col-lg-4 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><Link href="#" className="lightbox-image"><img src="images/resource/cafenea-1.png" alt="Image"/></Link></figure>
                                <div className="text">Luces y la magia de Tlaquepaque, serán testigos de nuestra unión civil y eterna rodeado de nuestra familia y amigos.</div>
                                <Link href="https://maps.app.goo.gl/tmxYwxrrFyyYZqh6A" target="_blank" className="theme-btn btn-style-one"><span className="btn-title">Ver ubicación</span></Link>
                            </div>
                        </div>

                        <div className="event-info-block col-lg-8 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="text">Cafenea 40 se encuentra en el corazón de Tlaquepaque, un pueblo Mágico en Jalisco. Desde la ubicación y vista increíble, este lugar preparará para nosotros los platillos más deliciosos, acompañados de una bebida cuidadosamente seleccionada por la novia. </div>
                                    <div className="event-time"><i className="icon flaticon-alarm"></i> 07:00 pm</div>
                                </div>
                                <figure className="image overlay-anim"><Link href="#" className="lightbox-image"><img src="images/resource/event2-5.jpg" alt="Image"/></Link></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Event1