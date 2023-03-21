import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from "react-router-dom";

const OneProductView = (props) => {
    const [oneProduct, setOneProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        //console.log('refresh')
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
              setOneProduct(res.data);
            }) 
            .catch( err => console.log(err) );
    }, [id]);


    const deleteHandler = () => {
      axios.delete(`http://localhost:8000/api/products/${id}`)
          .then((res) => {
            navigate('/')
          }
          )
    }
  return (
    <div>
      <h3>{oneProduct.title}</h3>
      <p>Price: ${oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
      <Link to={`/product/edit/${oneProduct._id}`}>Update</Link>
      <button className='delete' onClick = { deleteHandler }>Delete</button>
    </div>
  );
};

export default OneProductView;
