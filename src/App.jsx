import Header from './components/Header/Header.jsx'
import Mainbanner from './components/Main-banner/Main-banner.jsx'
import NewArrivals from './components/NewArrivals/NewArrivals.jsx'
import data from './components/Data.js';

function App() {
  const {products} = data;
  return (
    <>
      <Header/>
      <Mainbanner/>
      <NewArrivals products={products}></NewArrivals>
    </>
  )
}

export default App
