import React from 'react';
import CountDown from '@/components/elements/CountDown';

const Countdown3 = () => {
  const fixDate = new Date();
  return (
    <>
    <section className="countdown-section-three p-0 ">
      <div className="anim-icons">
        <div className="icon-leaves-10"></div>
        <div className="icon-leaves-11"></div>
      </div>
      <div className="small-container">
        <div className="outer-box wow fadeInUp">
          <div className="time-counter">
            <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Countdown3