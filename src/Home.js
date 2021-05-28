import React from "react";
import Product from "./components/Product";
import "./Home.css";
import Slider from "./components/Slider";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Search from "./components/Search";
import { BASE_URL } from "./components/constants/Base_url";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import { connect } from "react-redux";

function Home(props) {
  let [products, setProducts] = useState({});

  useEffect(() => {
    axios({
      url: BASE_URL + `api/product`,
      method: "get",
    }).then(
      (response) => {
        setProducts(response.data.data.docs);
        props.dispatch({
          type: "ALL_PRODUCT",
          payload: response.data.data.docs,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Fragment>
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
      </div>
      <Footer />
    </Fragment>
  );
}

export default connect(function (state, props) {
  console.log("states in Home Components", state);
})(Home);
