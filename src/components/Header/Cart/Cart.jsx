import './Cart.css'
import { useCart } from 'react-use-cart'

export default function Cart(){
    const { 
        isEmpty,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        items 
    } = useCart();

    if(isEmpty) return <></>

    return (
        <div className="cart-wrapper">
            <div className='closure-position'>
            <h2>Order summary: {totalUniqueItems} </h2>
            <div className='cart-closure'>x</div>
            </div>
            <div className='items-wrapper'>

                {
                    items.map((item, index) => {
                        return (
                    <div key={index} className='item'>
                    <div className='initem-wrapper'>
                        <img src={item.img} alt="product" />
                        <div className='quantity-wrapper'>
                            <h3>{item.title}</h3>
                            <p>Color: Black</p>
                            <div className='quantity-changer'>
                            <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            >-</button>
                            <div className='number-input'>{item.quantity}</div>
                            <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            >+</button>
                            </div> 
                        </div>
                    </div>
                        <p>${item.price}</p>
                    </div>
                    )})
                }
                {/* <div className='item'>
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
                    </div> */}


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
                            <h3>Total</h3>
                            <p>$ {cartTotal.toFixed(2)} </p>
                        </div>
                        <button className='submit'>Checkout</button>
                    </div>
            </div>
        </div>
    )
}