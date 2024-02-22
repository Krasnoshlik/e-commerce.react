import './Footer.css'
import Insta from '../../assets/Footer/instagram.svg'
import Face from '../../assets/Footer/facebook.svg'
import You from '../../assets/Footer/youtube.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer-start-wrapper">
                <div className="logo-wrapper">
                    <h2>3legant.</h2>
                    <span></span>
                    <p>Headphone Store</p>
                </div>
                <ul className='menu-wrapper'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="footer-end-wrapper">
                <div className='copyright-wrapper'>
                    <span>Copyright © 2023 3legant. All rights reserved</span>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className="icons-wrapper">
                    <img src={Insta} alt="Insta" />
                    <img src={Face} alt="face" />
                    <img src={You} alt="You" />
                </div>
            </div>
        </footer>
    )
}