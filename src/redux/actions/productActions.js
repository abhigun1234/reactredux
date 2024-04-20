import axios from "axios"
import { ActionTypes } from "../constants/actionTypes"

export const fetchProducts=async (products)=>{
    const response =await axios.get("https://fakestoreapi.com/products")
    console.log("response",response)

    return {
        type:ActionTypes.FETCH_PRODUCTS,
        payload:response,
    }
}
export const setProducts=(products)=>{

    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export  const selectedProducts=(products)=>{
 return {

    type:ActionTypes.SELECTED_PRODUCT,
    payload:products,
 }
}