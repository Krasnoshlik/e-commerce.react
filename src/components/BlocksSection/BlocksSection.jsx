import Car from '../../assets/Blocks icons/Car.svg'
import Money from '../../assets/Blocks icons/Money.svg'
import Lock from '../../assets/Blocks icons/Lock.svg'
import Call from '../../assets/Blocks icons/Call.svg'
import './BlocksSection.css'

export default function BlocksSection() {
    return (
        <div className='container'>
        <div className="blocks-wrapper">
            <div className="block-wrapper">
                <img src={Car} alt="Car" />
                <h3>Free Shipping</h3>
                <p>Order above $200</p>
            </div>

            <div className="block-wrapper">
                <img src={Money} alt="Money" />
                <h3>Money-back</h3>
                <p>30 days guarantee</p>
            </div>

            <div className="block-wrapper">
                <img src={Lock} alt="Lock" />
                <h3>Payments</h3>
                <p>Secured by Stripe</p>
            </div>

            <div className="block-wrapper">
                <img src={Call} alt="Call" />
                <h3>24/7 Support</h3>
                <p>Phone and Email support</p>
            </div>
        </div>
        </div>
    )
}