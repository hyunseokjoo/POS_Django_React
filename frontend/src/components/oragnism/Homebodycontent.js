import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Category from '../molecule/Category';
import Product from '../molecule/Product';
import Axios from 'axios';
import '../../scss/oragnism/Homebodycontent.scss';


const Homebodycontent = () => {
    const dispatch = useDispatch();
    const jwtToken = useSelector((state) => state.jwtReducer.jwtToken);

    const [categories, setCategories] = useState([]);
    const [categoryID, setCategoryID] = useState('');
    const [products, setProducts] = useState([]);
    const [productID, setProductID] = useState('');
    const [seletedProduct, setSeletedProduct] = useState({});
    

    //작성자의 한한 category 내용 가져오기
    useEffect(() => {
        Axios.get('http://localhost:8000/menu/categories/', { headers: { Authorization: `JWT ${jwtToken}` } })
            .then((res) => {
                console.log(res.data);
                if (res.data.length !== 0 ){
                    setCategories(res.data);  
                    setCategoryID(res.data[0].id) 
                }
                
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, [] );

    //작성자의 한한 category에 해당하는 product가져오기
    useEffect(() =>{
        Axios.get('http://localhost:8000/menu/products/', 
        { 
            headers: { Authorization: `JWT ${jwtToken}` },
            params: { category : categoryID }, 
        })
        .then((res) => {
            setProducts(res.data);   
            console.log(`category ID : ${categoryID}`);  
            console.log(`category products  : ${products}`);  
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    }, [categoryID])

    //todo: 상품 내용 가져오기 중 오류 발생하여 처리 중
    useEffect(() => {
        console.log(productID);
        console.log(products);
        console.log(products.filter((product) => product.id === productID));
        setSeletedProduct(products.filter((product) => product.id === productID))
        console.log(seletedProduct);
    }, [productID]);

    //카테고리 변경 시 
    const fn_category_changed = (e) => {
        //console.log(`category number : ${e.target.id}`);
        if (e.target.id !== categoryID){
            //console.log(`현재 카테고리 id: ${categoryID}`);
            //console.log(`바뀐 카테고리 id: ${e.target.id}`);
            setCategoryID(e.target.id);
        }
        else {
            console.log('현재 카테고리와 같습니다.');
        }
    }

    const fn_product_selected = (e) => {
        console.log(e.target.id);
        setProductID(e.target.id);
    }

    return (
        <>
            <div className="homebodycontent">
                <ScrollMenu wheel={true}>
                    <Category categories={categories} color='cyan' onClick={fn_category_changed}/>
                </ScrollMenu>
                <hr/>
                <ScrollMenu wheel={true}>
                    <Product products={products} color='cyan' onClick={fn_product_selected}/>
                </ScrollMenu>
            </div>
        </>
    );
};

export default Homebodycontent;
