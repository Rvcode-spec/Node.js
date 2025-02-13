import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();


  useEffect(()=>{
    console.log(params);
    apihandle();
    
  },[params])

 const  apihandle = async ()=>{
  let result = await fetch(`http://localhost:5000/products/${params.id}`)
  result= await result.json();
  console.log(result);
  
 }
  
  
  const UpdateProduct = async () => {
    console.log(name,price,category,company);
    
  };

  return (
    <>
      <h1 className="inputBox">UpdateProduct</h1>
      <input
        type="text"
        placeholder="Product Name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     
     

      <input
        type="text"
        placeholder="Product Price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
            

      <input
        type="text"
        placeholder="Product Category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
             


      <input
        type="text"
        placeholder="Product Company"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
           


      <button onClick={UpdateProduct} className="button">
        Submit
      </button>
    </>
  );
}

export default UpdateProduct;
