import React from "react";
import "./UI/Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  console.log(props.data);
  return (
    <div className="product" key={props.data._id}>
      <Link className="product" to={`/product/${props.data._id}`}>
        <div className="product_info">
          <p>{props.data.name}</p>
          <p className="product_">
            <small>₹</small>
            <strong>{props.data.price}</strong>
          </p>
          <div className="product_rating">
            {/* {Array(props.avgRating)
            .fill()
            .map((_) => ( */}
            <p>⭐</p>
            {/* ))} */}
            {props.data.avgRating}
          </div>
        </div>
        <img src={props.data.mainImage} alt="product image" />
      </Link>
      <button type="submit">Add to backet</button>
    </div>
  );
}

export default Product;
