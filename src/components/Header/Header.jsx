import { useState } from 'react'
import './Header.css'
import Search from '../../assets/icons/search.svg'
import Account from '../../assets/icons/account.svg'
import CartSVG from '../../assets/icons/cart.svg'
import Burgermenu from '../../assets/icons/burger-menu.svg'
import CrossMenu from '../../assets/icons/Cross-menu.svg'
import Cart from './Cart/Cart'
import { useCart } from 'react-use-cart'

export default function Header() {
    const { totalItems }= useCart();
    const [burgmenu, setBurgmenu] = useState(false);
    const [cart, setCart] = useState(false);

    function cartChanger() {
        !cart ? setCart(true) : setCart(false)
    }
    function handleClick() {
        !burgmenu ? setBurgmenu(true) : setBurgmenu(false)
    }
    return (
      <header>
        <h1 className='logo'>3legant.</h1>
        <div onClick={handleClick} className='burger-menu'><img src={Burgermenu} alt="burger-menu" /></div>

        {burgmenu &&
        <div className='burger-menu-mobile'>
        <div className='mobile-logo-wrapper'>
            <h4 className='mobile-logo'>3legant.</h4>
            <div onClick={handleClick} className='cross-menu'><img src={CrossMenu} alt="cross-menu" /></div>
        </div>
        <input type="search" placeholder='Search'/>
        <ul className='mobile-menu-list'>
            <li>Home</li>
            <span className='mobile-menu-line'></span>
            <li>Shop</li>
            <span className='mobile-menu-line'></span>
            <li>Product</li>
            <span className='mobile-menu-line'></span>
            <li>Contact Us</li>
            <span className='mobile-menu-line'></span>
        </ul>
        <button>Sign-In</button>
        </div>
        }
        <ul className='menu-list'>
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Contact Us</li>
        </ul>
        <div className='header-icons-wrapper'>
            <div className='search'><img src={Search} alt="search"/></div>
            <div className='account'><img src={Account} alt="account"/></div>
            <div onClick={cartChanger} className='cart'><img src={CartSVG} alt="cart"/><div className='cart-count'>{totalItems}</div></div>
            {cart && <Cart/>}
        </div>
      </header>
    )
}