import React from 'react'
import "./UI/Product.css"

function Product(props) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{props.title}</p>
                <p className="product_">
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(props.rating)
                        .fill()
                        .map((_)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={props.image} alt="product image" />
            <button>Add to backet</button>
        </div>
    )
}

export default Product
