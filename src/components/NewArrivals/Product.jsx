import { useState } from 'react';
import './Product.css'

export default function Product(props) {
    const {product} = props;

    const [visible, setVisible] = useState(false);

    function buttonVisible () {
      setVisible(true)
    }
    function buttonInVisible() {
      setVisible(false)
    }
  return (
    <div className='product-wrapper'>
        <img onMouseEnter={buttonVisible} onMouseOut={buttonInVisible} src={product.img} alt={product.title}></img>
        <h3>{product.title}</h3>
        <div className='price'>${product.price}</div>
        {visible &&
        <div onMouseEnter={buttonVisible} onMouseOut={buttonInVisible} className='button-position'>
        <button>Add to cart</button>
        </div>
        }
    </div>
  )
}
