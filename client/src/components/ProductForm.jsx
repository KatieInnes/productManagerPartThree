import React, { useState } from  'react';
import axios from 'axios';
    
const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const { thingTypedInForm, savedFormItem } = props;

    const createProduct = (e) => {
        e.preventDefault();

        savedFormItem([...thingTypedInForm, { title, price, description }]);

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description,
        }).then(res => {
            console.log('res', res)
            setTitle("");
            setPrice("");
            setDescription("");
        }).catch(e => {
            console.log('error', e);
        })
    };
    
    return(
        <>
        <h1>Product Manager</h1>
        <form onSubmit={ createProduct }>
            <div className="mb-3">
                <label>Title: </label> 
                <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } />
            </div>
            <div className="mb-3">
                <label>Price: </label> 
                <input type="number" value={price} onChange={ (e) => setPrice(e.target.value) } />
            </div>
            <div className="mb-3">
                <label>Description: </label> 
                <input type="text" value={description} onChange={ (e) => setDescription(e.target.value) } />
            </div>
            <input type = "submit" value = "Create" />
        </form>

        </>

    );
};
    
export default ProductForm;