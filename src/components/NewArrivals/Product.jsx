import { useState } from 'react';
import { useCart } from 'react-use-cart';
import './Product.css'

export default function Product(props) {

  const { addItem } = useCart();

    const [visible, setVisible] = useState(false);

    function buttonVisible () {
      setVisible(true)
    }
    function buttonInVisible() {
      setVisible(false)
    }
  return (
    <div className='product-wrapper'>
        <img onMouseEnter={buttonVisible} onMouseOut={buttonInVisible} src={props.img}></img>
        <h3>{props.title}</h3>
        {visible &&
        <div onMouseEnter={buttonVisible} onMouseOut={buttonInVisible} className='button-position'>
        <button onClick={() => addItem(props.item)}>Add to cart</button>
        </div>
        }
        <div className='price'>$ {props.price}</div>
    </div>
  )
}
