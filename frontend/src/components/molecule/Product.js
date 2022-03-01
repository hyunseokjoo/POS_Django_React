import React from 'react'
import ProductItem from '../atom/ProductItem'

const Product = ({products, color, onClick}) => { 
    const productList = products.map(product => (
        <ProductItem 
        key={product.id} 
        id={product.id} 
        name={product.name} 
        price={product.price} 
        color={color} 
        onClick={onClick}/>
    ));
    
    return productList
}

export default Product;