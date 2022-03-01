import React from 'react'
import CategoryItem from '../atom/CategoryItem'

const Category = ({categories, color, onClick}) => { 
    const categoryList = categories.map(category => (
        <CategoryItem 
        key={category.id} 
        id={category.id} 
        name={category.name} 
        color={color} 
        onClick={onClick}/>
    ));
    
    return categoryList
}

export default Category;