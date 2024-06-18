import Link from "next/link";
import React from 'react';
import CountDown from '@/components/elements/CountDown';

const Countdown2 = () => {
  const fixDate = new Date();
    return (
        <>
        <section className="countdown-section-two pt-0">
            <div className="bg bg-pattern-4"></div>
            <div className="anim-icons">
                <div className="icon-flower-3"></div>
                <div className="icon-flower-4"></div>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center style-two">
                    <span className="sub-title">Stepping Into Forever</span>
                    <h2>Join Us in Celebrating</h2>
                    <div className="text">We would love to meet up and chat about how we can <br/> make your dram wedding happen!</div>
                </div>
                <div className="outer-box wow fadeInUp">
                    <div className="time-counter">
                        <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
                        <div className="btn-box">
                            <Link href="page-rsvp" className="theme-btn btn-style-two"><span className="btn-title">RSVP</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Countdown2