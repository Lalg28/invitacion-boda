const CallToAction1 = ({ guest }) => {
    return (
        <>
        <section className="call-to-action">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1-event.png)' }}></div>
            <div className="icon-flowers"></div>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="content-box wow fadeInUp">
                        <i className="icon flaticon-marriage"></i>
                        <h2 className="title">¡Hey {`${guest.name}`}, Queremos saber si estarás ahi!</h2>
                        <div className="text">Confirma tu asistencia antes del 10 de Julio por favor</div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction1