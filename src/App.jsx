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

function App() {
  const {products} = data;
  const {bestproducts} = seconddata;
  return (
    <>
      <Header/>
      <Mainbanner/>
      <NewArrivals products={products}></NewArrivals>
      <ShopCollection/>
      <BestSeller products={bestproducts}/>
      <Promotion/>
      <BlocksSection/>
      <Instagram/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
