import React, { useEffect, useState } from 'react'

export default function Products() {
    const [products ,setProducts] = useState([""]);

    useEffect(()=>{
        getProducts();

    },[])

    const getProducts= async()=>{
        let result = await fetch('http://localhost:5000/products'); 
        result =  await result.json();
        setProducts(result);
    }
    console.log("prodect", products);
    
  return (
    <div className='product-list'>
      <h1>Products Pagas</h1>
        <ul>
            <li>S.No</li>
            <li>Name</li>
        </ul>
{
   products.map((item, index) => (
    <ul key={index}>
      <li>{index+1}</li>
      <li>{item.name}</li>
    </ul>
  ))
  
}
    </div>
  )
}
