import React from "react";
import "./Product.css";

function Product(){
    return<div className="product">
        <div className="productinfo">
            <p>Oneplus</p>
            <p className="product_price">
                <small>$</small>
                <strong>34.56</strong>
            </p>
            <div className="product_rat">
                <p> ⭐⭐⭐⭐ </p>
            </div>
        
            <img className="imgp" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31pAe23ncfL._AC_SR400,600_.jpg"></img>
            <button className="buttonp">Add to Basket</button>
        </div>
    </div>
}
export default Product