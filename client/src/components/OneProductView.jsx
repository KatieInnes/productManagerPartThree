import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";

const OneProductView = (props) => {
    const [oneProduct, setOneProduct] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
              console.log(res.data);
              setOneProduct(res.data);
            }) 
            .catch( err => console.log(err) );
    }, [id]);

  return (
    <div>
      <h3>Product Name: {oneProduct.title}</h3>
      <p>Price: ${oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
    </div>
  );
};

export default OneProductView;
