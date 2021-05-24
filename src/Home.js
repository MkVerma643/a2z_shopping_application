import React from "react";
import Product from "./components/Product";
import "./Home.css";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import { BASE_URL } from "./components/constants/Base_url";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  let [products, setProducts] = useState({});
  let [searchProduct, setSearchProduct] = useState({});
  let [userDetails, setUserDetails] = useState({});
  let [login, setlogin] = useState(false);
  let [name, setName] = useState("");

  useEffect(() => {
    axios({
      url: BASE_URL + `api/product`,
      method: "get",
    }).then(
      (response) => {
        setProducts(response.data.data.docs);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <Slider />

      <div className="home_row">
        {/* {console.log(products)} */}
        {products?.length > 0 &&
          products.map((product, index) => {
            return <Product data={product} key={product._id} />;
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
