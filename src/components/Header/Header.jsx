import { useState } from "react";
import { MdOutlineAccountCircle, MdAccountCircle } from "react-icons/md";
import "./Header.css";
import CartSVG from "../../assets/icons/cart.svg";
import Burgermenu from "../../assets/icons/burger-menu.svg";
import CrossMenu from "../../assets/icons/Cross-menu.svg";
import Cart from "./Cart/Cart";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { AuthModal } from "./Account/AuthModal/AuthModal";
import { useSelector, useDispatch } from 'react-redux';
import { setUserLogOut } from "../../redux/usersSlice";

export default function Header() {
  const someUserLoged = useSelector((state) => state.userLogedIn.userLoged);
  const dispatch = useDispatch();
  const { totalItems } = useCart();
  const [burgmenu, setBurgmenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [logOut, setLogOut] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  function cartChanger() {
    !cart ? setCart(true) : setCart(false);
    if (totalItems === 0) toast.error("No Items in Cart");
  }
  function handleClick() {
    !burgmenu ? setBurgmenu(true) : setBurgmenu(false);
  }

  const handleClickScroll = () => {
    if (event.target.id === "toStart") {
      const element = document.getElementById("Start");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (event.target.id === "toShop") {
      const element = document.getElementById("Shop");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (event.target.id === "toProduct") {
      const element = document.getElementById("Product");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (event.target.id === "toContact") {
      const element = document.getElementById("Contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  function handleLogOut() {
    setLogOut(false);
    dispatch(setUserLogOut(false));
    toast("You logged out your account!")
  }

  return (
    <header>
      <div className="header-wrapper">
        <h1 className="logo">3legant.</h1>

        {burgmenu && (
          <div className="burger-menu-position">
            <div className="burger-menu-mobile">
              <div className="mobile-logo-wrapper">
                <h4 className="mobile-logo">3legant.</h4>
                <div onClick={handleClick} className="cross-menu">
                  <img src={CrossMenu} alt="cross-menu" />
                </div>
              </div>
              <ul className="mobile-menu-list">
                <li>Home</li>
                <span className="mobile-menu-line"></span>
                <li>Shop</li>
                <span className="mobile-menu-line"></span>
                <li>Product</li>
                <span className="mobile-menu-line"></span>
                <li>Contact Us</li>
                <span className="mobile-menu-line"></span>
              </ul>
              <button>Sign-In</button>
            </div>
          </div>
        )}

        <div onClick={handleClick} className="burger-menu">
          <img src={Burgermenu} alt="burger-menu" />
        </div>

        <ul className="menu-list">
          <li id="toStart" onClick={handleClickScroll}>
            Home
          </li>
          <li id="toShop" onClick={handleClickScroll}>
            Shop
          </li>
          <li id="toProduct" onClick={handleClickScroll}>
            Product
          </li>
          <li id="toContact" onClick={handleClickScroll}>
            Contact Us
          </li>
        </ul>
        <div className="header-icons-wrapper">
          <div className="account" >
            { !someUserLoged ?
            <MdOutlineAccountCircle size={22.5} onClick={() => setIsOpen(true)}/> : 
            <MdAccountCircle size={22.5} onClick={() => setLogOut(true)}/>
            }
          </div>
          {logOut && 
          <div className="logOut__button__position">
          <button className="logOut__button"  onClick={handleLogOut}>Log out from my account</button>
          </div>
          }
          {isOpen &&
          <AuthModal setIsOpen={setIsOpen}
          />}

          <div onClick={cartChanger} className="cart">
            <img src={CartSVG} alt="cart" />
            <div className="cart-count">{totalItems}</div>
          </div>
          {cart && <Cart cartChanger={cartChanger} />}
        </div>
      </div>
    </header>
  );
}
