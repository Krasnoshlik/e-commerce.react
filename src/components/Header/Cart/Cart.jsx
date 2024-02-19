import './Cart.css'
import Product1 from '../../../assets/Products/product1.jpg'

export default function Cart() {
    return (
        <div className="cart-wrapper hidden">
            <div className='closure-position'>
            <h2>Order summary</h2>
            <div className='cart-closure'>x</div>
            </div>
            <div className='items-wrapper'>


                <div className='item'>
                    <div className='initem-wrapper'>
                        <img src={Product1} alt="product" />
                        <div className='quantity-wrapper'>
                            <h3>Tray Table</h3>
                            <p>Color: Black</p>
                            <div className='quantity-changer'>
                            <button>-</button>
                            <div className='number-input'>1</div>
                            <button>+</button>
                            </div> 
                        </div>
                    </div>
                        <p>$38.00</p>
                </div>

                <div className='item'>
                    <div className='initem-wrapper'>
                        <img src={Product1} alt="product" />
                        <div className='quantity-wrapper'>
                            <h3>Tray Table</h3>
                            <p>Color: Black</p>
                            <div className='quantity-changer'>
                            <button>-</button>
                            <div className='number-input'>1</div>
                            <button>+</button>
                            </div> 
                        </div>
                    </div>
                        <p>$38.00</p>
                </div>


                    <div className='finalisation-wrapper'>
                        <div className='input-wrapper'>
                            <input type="text" placeholder='Input'/>
                            <button>Apply</button>
                        </div>
                        <div className='total-info'>
                            <h3>Shipping</h3>
                            <p>Free</p>
                        </div>
                        <div className='total-info'>
                            <h3>Subtotal</h3>
                            <p>$99.0</p>
                        </div>
                        <div className='total-info'>
                            <h3>Total</h3>
                            <p>$234.00</p>
                        </div>
                        <button className='submit'>Checkout</button>
                    </div>
            </div>
        </div>
    )
}