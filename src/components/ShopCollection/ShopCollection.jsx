import './ShopCollection.css'
import Headband from '../../assets/Collection/Headband.png'
import Earbuds from '../../assets/Collection/Earbuds.png'
import Accessories from '../../assets/Collection/Accessories.png'
import ArrowRight from '../../assets/Collection/arrow-right.svg'

export default function ShopCollection() {
    return (
        <>
        <h2 className='collection-heading'>Shop Collection</h2>
        <div className='collection-wrapper'>

            <div className='left-collection'>
                <img src={Headband} alt="Headband" width='100%' />

                <div className='position-in-img-button'>
                <div className='in-img-button'>
                <h3>Headband</h3>
                <button>Collection <img src={ArrowRight}/></button>
                </div>
                </div>

            </div>

            <div className='right-wrapper'>
            <div className='right-collection'>
                <img src={Earbuds} alt="Earbuds" width='100%'/>

                <div className='position-in-img-button'>
                <div className='in-img-button'>
                <h3>Earbuds</h3>
                <button>Collection <img src={ArrowRight}/></button>
                </div>
                </div>

            </div>
            <div className='right-collection'>
                <img src={Accessories} alt="Accessories" width='100%'/>

                <div className='position-in-img-button'>
                <div className='in-img-button'>
                <h3>Accessories</h3>
                <button>Collection <img src={ArrowRight}/></button>
                </div>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}