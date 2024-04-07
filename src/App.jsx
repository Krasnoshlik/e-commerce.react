import Header from './components/Header/Header.jsx'
import Mainbanner from './components/Main-banner/Main-banner.jsx'
import NewArrivals from './components/NewArrivals/NewArrivals.jsx'
import data from './components/Data.js';
import seconddata from './components/SecondData.js'
import ShopCollection from './components/ShopCollection/ShopCollection.jsx';
import BestSeller from './components/BestSeller/BestSeller.jsx';
import Promotion from './components/Promotion/Promotion.jsx';
import BlocksSection from './components/BlocksSection/BlocksSection.jsx';
import Instagram from './components/Instagram/Instagram.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';
import Footer from './components/Footer/Footer.jsx';
import { CartProvider } from 'react-use-cart';
import { ToastContainer } from 'react-toastify';
import {useState, useEffect} from 'react';

function App() {
  const { productData } = data;
  const { bestproducts } = seconddata;
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }
  
  return (
    <>
      <CartProvider>
      <Header/>
      <Mainbanner />
      <NewArrivals products={productData}></NewArrivals>
      <ShopCollection/>
      <BestSeller products={bestproducts}/>
      </CartProvider>
      <Promotion/>
      <BlocksSection/>
      <Instagram/>
      <Newsletter/>
      <Footer/>
      <ToastContainer  autoClose={1000} hideProgressBar={true} newestOnTop={false} closeOnClick/>
    </>
  )
}

export default App
