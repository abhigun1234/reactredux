import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';

function ProductComponent(props) {
  
    const products=useSelector((state)=>state)
     console.log(" products in productcomponent",products)
    const [prodictList,setProduct]=useState(products.allProducts.product)
   // console.log(" products in productcomponent111",prodictList)
    
return(<div>
 {

        products.allProducts.products.map(prod=>{

        return(
            <div>
               <ProductDetails></ProductDetails>
              data
                   {
            
                    prod.title
                 }
            </div>
         )
       }) 
 }

   </div>)
}

export default ProductComponent;