import Dude from '../../assets/Best Seller/dudewithheadphones.png';
import './Promotion.css'
import React from 'react';
import { useState } from 'react';

export default function Promotion() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "June, 31, 2024";

    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    React.useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);

return (
        <div className="promotion">
            <div className="promotion-left">
                <img src={Dude} alt="Dude" width='100%'/>
            </div>

            <div className="promotion-right">
                <span>PROMOTION</span>
                <h2>Hurry up! 40% OFF</h2>
                <p>Thousands of high tech are waiting for you</p>
                <p>Offer expires in:</p>
                <div className='timer-wrapper'>

                    <div className='timer-block-wrapper'>
                        <div className="timer-block">{days}</div>
                        <p>Days</p>
                    </div>

                    <div className='timer-block-wrapper'>
                        <div className="timer-block">{hours}</div>
                        <p>Hours</p>
                    </div>

                    <div className='timer-block-wrapper'>
                        <div className="timer-block">{minutes}</div>
                        <p>Minutes</p>
                    </div>

                    <div className='timer-block-wrapper'>
                        <div className="timer-block">{seconds}</div>
                        <p>Seconds</p>
                    </div>

                </div>
                <button className='shop-now'>Shop now</button>
            </div>
        </div>
    )
}