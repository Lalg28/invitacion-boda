import Link from "next/link"
const Couple1 = () => {
    return (
        <>
            <section className="couple-section pt-0" id="presentacion">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="couple-block col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-our-story"><img src="images/resource/elnovio.jpg" alt=""/></Link></figure>
                                        <div className="couple-frame"></div>
                                        <div className="icon-border"></div>
                                        <div className="icon-flowers-2"></div>
                                    </div>
                                    <div className="content-box">
                                        <span className="designation">El novio</span>
                                        <h3 className="name"><Link href="page-our-story">Antonio Guardado</Link></h3>
                                        <div className="text">Gracias a mi familia y amigos por ser parte del día más importante de mi vida; mi unión eterna con Azucena, el amor de mi vida. Todo el amor que me han brindado, me han convertido en el hombre que soy ahora.</div>
                                        {/* <ul className="social-icon-two">
                                            <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="icon fab fa-google"></i></Link></li>
                                            <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>

                            <div className="couple-block style-two col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-our-story"><img src="images/resource/elnovia.jpg" alt=""/></Link></figure>
                                        <div className="couple-frame"></div>
                                        <div className="icon-border"></div>
                                        <div className="icon-flowers-2"></div>
                                    </div>
                                    <div className="content-box">
                                        <span className="designation">La Novia</span>
                                        <h3 className="name"><Link href="page-our-story">Azucena Vargas</Link></h3>
                                        <div className="text">Estoy muy feliz de compartir este día tan importante en compañía de mi familia y amigos quienes han estado conmigo y brindado su amor en todo momento. Hoy uno mi vida a la de Antonio, el amor de mi vida. Gracias por acompañarnos y celebrar con nosotros.</div>
                                        {/* <ul className="social-icon-two">
                                            <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="icon fab fa-google"></i></Link></li>
                                            <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                        </ul> */}
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
export default Couple1