import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "./NewArrivals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/hash-navigation';
import data from "../Data";

export default function NewArrivals() {
  return (
    <main>
      <div className="container">
        <h2>New Arrivals</h2>
        <div className="row">
        <Swiper
          modules={[ Pagination]}
          spaceBetween={10}
          slidesPerView={4.5}
          breakpoints={{
            700: {
              width: 640,
              slidesPerView: 3,
            },
            400: {
              width: 768,
              slidesPerView: 4,
            },
          }}
        >
          {data.productData.map((item, index) => (
            <SwiperSlide key={index}><Product item={item}></Product></SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </main>
  );
}
