import Product from "./Product";
import './NewArrivals.css'

export default function NewArrivals(props) {
    const { products } = props;
    return (
        <main>
            <h2>New Arrivals</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </main>
    )
}