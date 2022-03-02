import React from 'react'
import { useDispatch } from 'react-redux'
import { setItem } from '../../store/selectedItemList'
import ProductItem from '../atom/ProductItem'

const Product = ({products, color}) => { 
    const dispatch = useDispatch();

    const productList = products.map(product => (
        <ProductItem 
        key={product.id} 
        id={product.id} 
        name={product.name} 
        price={product.price} 
        color={color} 
        onClick={() => dispatch(setItem(product))}/>
    ));
    
    return productList
}

export default Product;