import Product from "./Product";
import './NewArrivals.css'
import data from "../Data";

export default function NewArrivals() {
    return (
        <main>
            <h2>New Arrivals</h2>
            <div className="row">
                {data.productData.map((item, index) => (
                    <Product key={index} img={item.img} title={item.title} price={item.price} item={item}></Product>
                ))}
            </div>
        </main>
    )
}