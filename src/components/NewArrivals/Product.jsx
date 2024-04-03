import { useState } from 'react';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css'

export default function Product({item}) {
  const { addItem } = useCart();
  const { totalItems }= useCart();
  const [visible, setVisible] = useState(false);

  function handleClick() {
    addItem(item)
    if(totalItems > 0){
      toast.success("item added");
      }
  } 

    function buttonVisible () {
      setVisible(true)
    }
    function buttonInVisible() {
      setVisible(false)
    }
  return (
    <div className='product-wrapper'>
        <img onMouseEnter={buttonVisible} onMouseOut={buttonInVisible} src={item.img}></img>
        <h3>{item.title}</h3>
        {visible &&
        <div onMouseEnter={buttonVisible} onMouseOut={buttonInVisible} className='button-position'>
        <button onClick={handleClick}>Add to cart</button>
        </div>
        }
        <div className='price'>$ {item.price}</div>
    </div>
  )}