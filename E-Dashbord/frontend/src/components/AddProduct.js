import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError]=useState(false);
  
  const ProductAdd = async () => {
    console.log(!name);
    
    if(!name || !price || !category || !company){
        setError(true);
        return false
    }
    console.warn(name, price, category, company);
    const uesrId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result.json();
    console.log(result);
    console.log(uesrId._id);
  };

  return (
    <>
      <h1 className="inputBox">AddProduct</h1>
      <input
        type="text"
        placeholder="Product Name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       {error && !name && <span className="filled-input">name is not filled</span>}
     

      <input
        type="text"
        placeholder="Product Price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
             {error && !price && <span className="filled-input">price is not filled</span>}


      <input
        type="text"
        placeholder="Product Category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
             {error && !category && <span className="filled-input">category is not filled</span>}


      <input
        type="text"
        placeholder="Product Company"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
             {error && !company && <span className="filled-input">Company is not filled</span>}


      <button onClick={ProductAdd} className="button">
        Submit
      </button>
    </>
  );
}

export default AddProduct;
