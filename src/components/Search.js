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
  let [product, setProduct] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [productPerPage] = useState(10);

  useEffect(() => {
    // console.log("aaa",search.searchid)
    axios({
      url: BASE_URL + `api/product` + props.location.search,
      method: "get",
    }).then(
      (response) => {
        console.log("responese:", response);
        setProduct(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [props.location.search]);

  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}

export default Search;
