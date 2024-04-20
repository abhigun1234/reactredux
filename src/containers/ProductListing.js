import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts,fetchProducts } from '../redux/actions/productActions'
function ProductListing(props) {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
         fetchProducts()
      //  dispatch(fetchProducts())
    })
    const fetchProducts = async() => {
       const resoponse= await axios.get('https://fakestoreapi.com/products').catch(error => {

           
        })
        // console.log("resoponse", resoponse)
        dispatch(setProducts(resoponse.data))
    }

    // const fetchProducts=()=>{
    //     axios.get("https://fakestoreapi.com/products").then(res=>{

    //     }).catch(error=>{

    //     })
    // }
    //console.log(products)
    return (
        <div>
            <h1>Product Listing</h1>
            
            <ProductComponent></ProductComponent>
        </div>
    );
}

export default ProductListing;