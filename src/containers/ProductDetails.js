import React from 'react';
import { useSelector } from 'react-redux';
function ProductDetails(props) {
    const products=useSelector((state)=>state)
    console.log("product details component",products)
    return (
        <div>
           details 
        </div>
    );
}

export default ProductDetails;