import './Instagram.css';
import In1 from '../../assets/Instagram/Insta1.png'
import In2 from '../../assets/Instagram/Insta2.png'
import In3 from '../../assets/Instagram/Insta3.png'
import In4 from '../../assets/Instagram/Insta4.png'

export default function Instagram() {
    return (
        <div className='container'>
        <div className="instagram-wrapper">
            <span>NEWSFEED</span>
            <h2>Instagram</h2>
            <p>Follow us on social media for more discount & promotions</p>
            <span>@3legant_official</span>
            <div className="insta-photos-wrapper">
                <img src={In1} alt="In1"/>
                <img src={In2} alt="In2"/>
                <img src={In3} alt="In3"/>
                <img src={In4} alt="In4"/>
            </div>
        </div>
        </div>
    )
}