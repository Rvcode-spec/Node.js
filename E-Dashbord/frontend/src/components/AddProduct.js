import React, { useState } from 'react'


function AddProduct(){
    const [name,setName] = useState('');
    const [price, setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const ProductAdd= async ()=>{
        console.warn(name,price,category,company);
        const uesrId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result.json();
        console.log(result);
        

        console.log(uesrId._id);

        
        
    }

    return(
        <>
            <h1 className='inputBox'>AddProduct</h1>
            <input type='text' placeholder='Prodeuct Name ' className='inputBox' value={name} onChange={(e)=>{
                {setName(e.target.value)}
            }} />
            <input type='text' placeholder='Prodeuct Price ' className='inputBox' value={price} onChange={(e)=>{
                {setPrice(e.target.value)}
            }}  />
            <input type='text' placeholder='Prodeuct Category ' className='inputBox' value={category} onChange={(e)=>{
                {setCategory(e.target.value)}
            }}  />
            <input type='text' placeholder='Prodeuct Company ' className='inputBox' value={company} onChange={(e)=>{
                {setCompany(e.target.value)}
            }}  />
            <button  onClick={ProductAdd}
            className='button'>Submit</button>
        </>
    )
}

export default AddProduct;