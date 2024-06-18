import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact5 = () => {
    return (
        <>
            <section className="fun-fact-section pt-0">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <div className="content">
                                        <div className="icon-flower-30"></div>
                                        <div className="count-box"><CounterUp count={148} time={3} /></div>
                                        <h6 className="counter-title">Best wedding suppliers <br/> with quality products</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <div className="content">
                                        <div className="icon-flower-30"></div>
                                        <div className="count-box"><CounterUp count={365} time={3} /></div>
                                        <h6 className="counter-title">We cover every day of the <br/> year for weddings</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <div className="content">
                                        <div className="icon-flower-30"></div>
                                        <div className="count-box"><CounterUp count={271} time={3} /></div>
                                        <h6 className="counter-title">Types of ready-made and <br/> packaged dress</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <div className="content">
                                        <div className="icon-flower-30"></div>
                                        <div className="count-box"><CounterUp count={184} time={3} /></div>
                                        <h6 className="counter-title">External collaborators will <br/> have a cool wedding</h6>
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
export default Funfact5
