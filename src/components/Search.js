import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "./Product";
import Pagination from "./Pagination";
import { BASE_URL } from "./constants/Base_url";

function Search(props) {
  let [product, setProducts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [productPerPage] = useState(3);

  // console.log("aaa", props.location.search);

  useEffect(() => {
    axios({
      url: BASE_URL + `api/product` + props.location.search,
      method: "get",
    }).then(
      (response) => {
        console.log("aaa", props.location.search);

        setProducts(response.data.data.docs);
        console.log(product);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [props.location.search]);
  const indexOflast = currentPage * productPerPage;
  const indexOfFirst = indexOflast - productPerPage;
  const currentProduct = product.slice(indexOfFirst, indexOflast);

  return (
    <div>
      <Header />
      <div>
        <div style={{ marginLeft: "40%" }}>
          <Pagination
            productPerPage={productPerPage}
            totalProduct={product.length}
            paginate={setCurrentPage}
          />
        </div>
        <div className="row">
          {product?.length > 0 &&
            product.map((each, index) => {
              return <Product data={each} key={index} />;
            })}
        </div>
        <div style={{ marginLeft: "40%" }}>
          <Pagination
            productPerPage={productPerPage}
            totalProduct={product.length}
            paginate={setCurrentPage}
          />
        </div>
        <center> Page {currentPage}</center>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Search;
