import React from "react";
import Product from "./components/Product";
import "./Home.css";
import Slider from "./components/Slider";

function Home() {
  return (
    <div>
      <Slider />

      <div className="home_row">
        <Product
          id="1"
          title="N95 Masks"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/81p2NFSykwL._QL65_AC_UL640_.jpg"
        />
        <Product
          id="2"
          title="N95 Masks"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/81p2NFSykwL._QL65_AC_UL640_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="1"
          title="N95 Masks"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/81p2NFSykwL._QL65_AC_UL640_.jpg"
        />
        <Product
          id="2"
          title="N95 Masks"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/81p2NFSykwL._QL65_AC_UL640_.jpg"
        />
        <Product
          id="1"
          title="N95 Masks"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/81p2NFSykwL._QL65_AC_UL640_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
