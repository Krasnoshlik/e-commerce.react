import Product from "../NewArrivals/Product";
import './BestSeller.css'

export default function BestSeller(props) {
    const {products} = props;
    return (
        <div className="bestseller-wrapper">
            <h2>Best Seller</h2>
            <div className="row">
            {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    )
}