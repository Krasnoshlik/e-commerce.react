import './Main-banner.css'
import MainBanner from "../../assets/icons/Main-banner.png"

export default function Mainbanner() {
    return (
        <div className='main-banner-wrapper'>
            <div className='main-banner-info-wrapper-position'>
            <div className='main-banner-info-wrapper'>
                <h1>Listen to <br /> the <span>amazing</span> <br/>music sound.</h1>
                <p>Experience music like never before</p>
                <button>Shopping Now</button>
            </div>
            </div>
            <img src={MainBanner} alt="main-banner" width='100%' />
            
        </div>
    )
}