import React from 'react';
import CountDown from '@/components/elements/CountDown';

const Countdown4 = () => {
  const fixDate = new Date();
    return (
        <>
            <section className="countdown-section-four pt-0">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="inner-box">
                            <div className="caption-box">
                                <h3 className="date">October 20th, 2025</h3>
                                <div className="address">LILOU HOTEL NEW YORK 198 West <br/> 27th Street, NY</div>
                            </div>
                        </div>
                    </div>
                    <div className="time-counter">
                        <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
                        {/*<div className="time-countdown-two" data-countdown="4/22/2025"></div>*/}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Countdown4