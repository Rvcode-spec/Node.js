import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

export default function Products() {
    const [products, setProducts] = useState([""]);

    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/products/${id}`, {
            method: "Delete"
        });
        result = result.json();
        if (result) {
            // alert("Record Delete")
            getProducts();
        }

        console.log(id);


    }
    // console.log("prodect", products);

    const serachHandle = async (e) => {
        console.log(e.target.value);

        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            setProducts(result);
        } else {
            getProducts();
        }
    }

    return (
        <div className='product-list'>
            <h1>Products Pagas</h1>
            <input className="serach-box " type='text' placeholder='Serach'
                onChange={serachHandle} />
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Operation</li>
            </ul>
            <ul>
                {products.length > 0 ? (
                    products.map((item, index) => (
                        <ul key={index}>
                            <li>{index + 1}</li>
                            <li>{item.name}</li>
                            <li>
                                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                                <Link to={'/update/' + item._id}>Update</Link>
                            </li>
                        </ul>
                    ))
                ) : (
                    <h3 style={{fontWeight: '600', margin:'10px', textAlign:'center'}}>No Products Found</h3>
                )}

            </ul>

        </div>
    )
}
