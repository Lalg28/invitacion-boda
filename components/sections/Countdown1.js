import React from 'react';
import CountDown from '@/components/elements/CountDown';

const Countdown1 = () => {
  const fixDate = new Date('2024-07-27T17:30:00');
  return (
  <>
  <section className="countdown-section pt-0" id="1">
    <div className="auto-container">
      <div className="content-box wow fadeInUp">
        <div className="inner-column">
          <div className="image-box">
            <figure className="image"><img width={516} src="images/resource/countdown-1.jpg" alt=""/></figure>
            <div className="icon-box"><div className="icon-flowers-1"></div></div>
          </div>
          <div className="caption-box">
            <div className="text">Días faltantes</div>
            <span className="icon-divider"></span>
          </div>
        </div>
      </div>
      <div className="time-counter wow fadeInUp">
        <CountDown endDateTime={fixDate.setDate(fixDate.getDate())} />
      </div>
    </div>
  </section>
  </>
  );
};
export default Countdown1