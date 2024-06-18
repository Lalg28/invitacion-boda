import { useState } from 'react';

const Faq = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>
  <section className="faqs-section-home1 mt-0 pt-120 pb-60 pb-md-20">
    <div className="auto-container">
      <div className="row"> 
        {/*  FAQ Column  */}
        <div className="faq-column col-lg-6">
          <div className="inner-column">
            <ul className="accordion-box style-two wow fadeInLeft">
              {/* Block */}
              <li className="accordion block active-block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  What warranties do I have for installation?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  What is included in your services?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  What are the payment methods?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  How fast I get my order?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*  FAQ Column  */}
        <div className="faq-column col-lg-6">
          <div className="inner-column mb-md-50">
            <ul className="accordion-box style-two bg-transparent p-0 wow fadeInLeft">
              {/* Block */}
              <li className="accordion block active-block pl-30 pr-30">
                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                  Produce Your Own Clean Save The Environment
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                  <div className="content border-bottom-0">
                    <div className="text">Reduce, reuse, and recycle: This is a classic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block pl-30 pr-30">
                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(6)}>
                  On-Site Service And Support For Certification
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                  <div className="content border-bottom-0">
                    <div className="text">On-site service and support for certification refers to the assistance provided to companies or organizations that are seeking certification for their products, services, or processes. This assistance can include everything from helping companies understand the certification requirements to providing on-site training and support during the certification process.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block pl-30 pr-30">
                <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(7)}>
                  Light Source For Stable Conversion Efficiency
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                  <div className="content border-bottom-0">
                    <div className="text">In the context of solar energy, a light source for stable conversion efficiency refers to a source of light that provides a consistent and predictable output, which can be used to test and optimize the performance of solar cells and panels. This is important because the efficiency of solar cells and panels can vary depending on the intensity and wavelength of the light they receive, so it is crucial to use a stable light source to ensure accurate and reliable measurements</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block pl-30 pr-30">
                <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(8)}>
                  Do You Give Guarantee And After Sales Service?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                  <div className="content border-bottom-0">
                    <div className="text">As an AI language model, I do not provide products or services, so I do not offer guarantees or after-sales service. However, many companies that offer products or services do provide guarantees and after-sales service to their customers.</div>
                    <div className="text">Guarantees are a form of assurance that a product or service will meet certain expectations or standards, and if they don't, the company will either repair or replace the product or provide a refund. Guarantees can vary depending on the product or service, and may be limited by certain terms and conditions.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default Faq
