import Dude from '../../assets/Best Seller/dudewithheadphones.png';
import './Promotion.css'

export default function Promotion() {
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
                        <div className="timer-block">02</div>
                        <p>Days</p>
                    </div>

                    <div className='timer-block-wrapper'>
                        <div className="timer-block">12</div>
                        <p>Hours</p>
                    </div>

                    <div className='timer-block-wrapper'>
                        <div className="timer-block">45</div>
                        <p>Minutes</p>
                    </div>

                    <div className='timer-block-wrapper'>
                        <div className="timer-block">05</div>
                        <p>Seconds</p>
                    </div>

                </div>
                <button className='shop-now'>Shop now</button>
            </div>
        </div>
    )
}