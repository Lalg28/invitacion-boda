import Link from "next/link"
const Clients1 = () => {
  return (
  <>
  <section className="clients-section pt-0" id="regalos">
    <div className="bg bg-pattern-8"></div>
    <div className="auto-container">
      <div className="row">
        <div className="title-column col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
          <div className="inner-column">
            <div className="sec-title mb-0">
              <span className="sub-title">Gracias por tus presentes</span>
              <h2>Opciones de regalo</h2>
              <div className="text">Elige el regalo perfecto: Mesa de Regalos en Liverpool o contribución en transferencia vía PayPal. ¡Gracias por tu generosidad!</div>
            </div>
          </div>
        </div>
        <div className="images-column col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
          <div className="inner-column">
            <div className="sponsors-outer">
              <div className="row full-height">
                <div className="client-block col-lg-6 col-md-6 full-height">
                  <figure className="image full-height"><Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51452499?_ga=2.76678365.974833747.1717996772-853325573.1716152143" target="_blank"><img src="images/clients/liverpool.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-6 col-md-6 full-height">
                  <figure className="image full-height"><Link href="https://www.paypal.com/paypalme/AntonioGuardado" target="_blank"><img className="paypal-logo" src="images/clients/paypal.png" alt="Image" /></Link></figure>
                </div>
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
export default Clients1