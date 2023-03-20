import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import AllProductView from '../components/AllProductView';

const Main = (props) => {

    const [product, setProduct] = useState([]);

    return (
        <>
            <ProductForm thingTypedInForm={product} savedFormItem={setProduct} />
            <AllProductView thingTypedInForm={product} savedFormItem={setProduct} />
        </>
    )
}

export default Main;

