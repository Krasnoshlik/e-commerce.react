import './Newsletter.css'

export default function Newsletter() {
    
    return (
        <div className="newsletter-wrapper">
            <h2>Join Our Newsletter</h2>
            <p>Sign up for deals, new products and promotions</p>
            <div className="email-wrapper">
                <input type="email" placeholder='Email address' required/>
                <button>Signup</button>
            </div>
        </div>
    )
}