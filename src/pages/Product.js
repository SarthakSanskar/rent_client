import React, { useEffect, useState } from 'react';
import { getProduct , productStar } from '../functions/product';
import SingleProduct from '../components/cards/SingleProduct';
import {useSelector} from 'react-redux';
import {getRelated} from '../functions/product';

import {getCategory} from '../functions/category';
import productCard from '../components/cards/ProductCard'; 
import ProductCard from '../components/cards/ProductCard';


const Product = ({ match }) => {
    const [product, setProduct] = useState({});
    const [related , setRelated] = useState([]);
    const [star, setStar] = useState(0);

    const {user} = useSelector((state) => ({...state}));

    const { slug } = match.params


    useEffect(() => {
        loadSingleProduct();
    }, [slug]);

    useEffect(() => {
        if(product && product.category){
        loadRelatedProduct(product.category.slug);
    }}, [product]);

    useEffect(() => {
        if(product.ratings && user){
            let exsistingRatingObject = product.ratings.find((ele) => (ele.postedBy == user._id));
            exsistingRatingObject && setStar(exsistingRatingObject.star);
        }
    });

    const loadSingleProduct = () =>{
        getProduct(slug).then((res => {
            setProduct(res.data);
            // console.log('$$$$$$$$$$$$$$$' ,product)
        }));
    }
    // console.log('$$$$$$$$$$$$$$$' ,product.category.slug)
    const loadRelatedProduct = (sarthak) =>{
            getCategory(sarthak).then(res => {
                // console.log("#######" , res)
                    setRelated(res.data.products)}
                )
    }
// console.log("%%%%%%%%%%%" , related)

    const onStarClick = (newRating , name) => {
        setStar(newRating);
        // console.table(newRating , name);
        productStar(name, newRating , user.token)
        .then(res => {
            console.log('rating clicked' ,  res.data);
        });
    };


    return (
        <div className='container-fluid'>
            <div className='row pt-4 '>
                <SingleProduct product={product} onStarClick = {onStarClick} star = {star} />
            </div>

            <div className='row'>
                <div className = ' col text-center pt-5 pb-5 '> 
                <hr/>
                <h4 className='text-center p-3 mt-5 mb-5 display-4 jumbotron'>
                    Related Products
                    </h4>
                <hr/>
                </div>
            </div>
            <div className = 'row pb-5'>
                {related.length ? related.map((r) => <div className = 'col-md-4' key = {r._id} >
                    <ProductCard  product = {r}/>
                </div>) :  <div className ='text-center col'> No Related Products</div>}
            </div> 
        </div>
    );
};

export default Product;
