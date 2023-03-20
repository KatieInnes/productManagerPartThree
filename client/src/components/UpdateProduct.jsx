import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, } from "react-router-dom";

const Update = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                console.log(res.data);
            }) 
            .catch( err => console.log(err) );
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products" + id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            navigate("/api/products");
        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <h1>Product Update</h1>
        <form onSubmit={ updateProduct }>
            <div className="mb-3">
                <label>Title: </label> 
                <input type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value) } />
            </div>
            <div className="mb-3">
                <label>Price: </label> 
                <input type="number" name="price" value={price} onChange={ (e) => setPrice(e.target.value) } />
            </div>
            <div className="mb-3">
                <label>Description: </label> 
                <input type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value) } />
            </div>
            <input type = "submit" value = "Update" />
        </form>

        </>

    );

};

export default Update;
