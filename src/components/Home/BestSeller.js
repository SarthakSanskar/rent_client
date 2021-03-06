import React, { useEffect, useState } from 'react';
import { getProducts, getproductsCount } from '../../functions/product';
import ProductCard from '../cards/ProductCard';
import LoadingCard from '../cards/LoadingCard';
import { Pagination } from 'antd';
import Slide from 'react-reveal/Slide';

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadAllProducts()
    }, [page]);

    useEffect(() => {
        getproductsCount().then((res) => setProductsCount(res.data));
    }, []);

    const loadAllProducts = () => {
        setLoading(true);
        // sort,order,limit
        getProducts("sold", "desc", page).then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    };

    return (
        <>
            <div className='container'>
                {loading ? (<LoadingCard count={3} />
                ) : (
                        <div className='row'>
                            {products.map((product) => (
                                <div key={product._id} className='col-md-4'>
                                    <Slide left><ProductCard product={product} /></Slide>
                                </div>
                            ))}
                        </div>)}
            </div>

            <div className='row'>
                <nav className='col-md-4 offset-md-4 text-center pt-5 p-3'>
                    <Pagination
                        current={page}
                        total={(productsCount / 3) * 10}
                        onChange={(value) => setPage(value)}
                    ></Pagination>
                </nav>
            </div>
        </>
    );
};

export default BestSeller;