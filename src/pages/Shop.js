import React, { useEffect, useState } from 'react';
import { getProductsByCount, fetchProductsByFilter } from '../functions/product';
import {getCategories} from '../functions/category';
import {getSubs} from '../functions/sub';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/cards/ProductCard';
import { Menu, Slider , Checkbox } from 'antd';
import { DollarOutlined, DownSquareOutlined , StarOutlined } from '@ant-design/icons';
import Star from '../components/forms/Star';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState([0, 0]);
    const [ok , setOk] = useState(false);
    const [categories , setCategories] = useState([]);
    const [categoryId , setCategoryId] = useState([]);
    const [star , setStar] = useState('');
    const [subs , setSubs] = useState([]);
    const [sub , setSub] = useState('');
    const [searchProd , setSearchProd] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [allProd, setallProd] = useState(true)
    let dispatch = useDispatch();
    let { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    useEffect(() => {
        loadAllProducts();
        getCategories().then(res => setCategories(res.data));
        //fetch subcategory
        getSubs().then(res => setSubs(res.data));
    }, [searchValue]);



    console.log("!!!",products)

    const handleSubmit = (e) => {
        e.preventDefault();
        setallProd(false)
        let results = [];
        let searchField = "landmark";
        let searchVal = searchValue;
        // console.log("##",searchValue)
        for (var i=0 ; i < products.length ; i++)
        {   
            if (products[i][searchField]){
                if (products[i][searchField].toLowerCase().includes(searchVal.toLowerCase())) {
                    results.push(products[i]);
                }
            }
        }
        // console.log("@@@@@@@@@ ", results)
        setSearchProd(results);
    }
    console.log(allProd);





    const fetchProducts = (arg) => {
        fetchProductsByFilter(arg).then((res) => {
            setProducts(res.data);
        });
    };


    // 1.) load products by default on page load
    const loadAllProducts = () => {
        getProductsByCount(12).then((p) => {
            setProducts(p.data);
            setLoading(false);
            setallProd(true)
        });
    };

    //2. load products on user search
    useEffect(() => {
        const delayed = setTimeout(() => {
            fetchProducts({ searchText: text });
        }, 300);
        return () => clearTimeout(delayed);
    }, [text]);

    // 3. load products based on price range
    useEffect(() => {
        console.log('ok to request');
        fetchProducts({price});
    },[ok]);

    const handleSlider = (value) => {
        dispatch({
            type: ' SEARCH_QUERY',
            payload:{ text : ""},
        });
        setStar("");
        setCategoryId([]);
        setPrice(value);
        setTimeout(() => {
            setOk(!ok);
        }, 300);
    };

    // 4. load products based on categories

    const showCategories = () => categories.map((c) => <div key = {c._id}>
        <Checkbox onChange = {handleCheck} className = 'pb-2 pl-4 pr-4' value ={c._id} name = 'category' checked = {categoryId.includes(c._id)}>{c.name} </Checkbox><br/>
        </div>)

        const handleCheck = e => {
            dispatch({
                type: 'SEARCH_QUERY',
                payload:{text:""},
            });
            setPrice([0,0]);
            setStar("");
            let inTheState = [...categoryId];
            let justChecked = e.target.value
            let foundInTheState = inTheState.indexOf(justChecked)


            if(foundInTheState === -1){
                inTheState.push(justChecked);
            }else {
                inTheState.splice(foundInTheState , 1);
            }

            setCategoryId(inTheState);
            // console.log(inTheState);
            fetchProducts({category: inTheState});
        };


        // 5. products by stars rating

        const handleStarClick = num => {
            dispatch({
                type: 'SEARCH_QUERY',
                payload:{text:""},
            });
            setPrice([0,0]); 
            setCategoryId([]);
            setStar(num);
            fetchProducts({stars: num}); 
        };
        const showStars = () => (
            <div className = 'pr-4 pl-4 pb-2'>
                <Star starClicks ={handleStarClick} numberOfStar= {5} /> 
                <Star starClicks ={handleStarClick} numberOfStar= {4} /> 
                <Star starClicks ={handleStarClick} numberOfStar= {3} /> 
                <Star starClicks ={handleStarClick} numberOfStar= {2} /> 
                <Star starClicks ={handleStarClick} numberOfStar= {1} /> 
            </div>
        );

        // 6. products by Sub-category

        const showSubs = () => subs.map((s) => (
        <div
         key = {s._id}
         onClick = {() => handleSub(s)}
         className = 'p-1 m-1 badge badge-secondary' 
         style = {{cursor:'pointer'}} >
             {s.name}
         </div>
         ));
            

        const handleSub = (sub) => {
            // console.log('Sub' , sub);
            setSub(sub);
            dispatch({
                type: 'SEARCH_QUERY',
                payload:{text:""},
            });
            setPrice([0,0]); 
            setCategoryId([]);
            setStar('');
            fetchProducts({sub}); 
        };
        
        

    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit}>
            <input
            type='text'
            className='form-control'
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            autoFocus
            required
           />
           </form>
            <div className='row'>
                <div className='col-md-3 pt-2'>
                    <h4>Search/Filter</h4>
                    <hr />
                    <Menu defaultOpenKeys={['1', '2' , '3' , '4']} mode='inline'>
                        {/* price */}
                        <SubMenu key='1' title={<span className='h6'><DollarOutlined /> Price </span>}>
                            <div>
                                <Slider className='ml-4 mr-4' tipFormatter={(v) => `$${v}`} range value={price} 
                                onChange={handleSlider} max='45000' />
                            </div>
                        </SubMenu>
                        {/* category */}
                        <SubMenu  key='2' title={<span className='h6'><DownSquareOutlined /> Categories </span>}>
                            <div style={{marginTop : '-10px'}}>
                            {showCategories()};
                            </div>
                        </SubMenu>
                        {/* Star Rating */}
                        <SubMenu  key='3' title={<span className='h6'>< StarOutlined /> Rating </span>}>
                            <div style={{marginTop : '-10px'}}>
                            {showStars()};
                            </div>
                        </SubMenu>
                        {/* Sub Category */}
                        <SubMenu  key='4' title={<span className='h6'><DownSquareOutlined /> Sub-Categories </span>}>
                            <div style={{marginTop : '-10px'}}>
                            {showSubs()};
                            </div>
                        </SubMenu>
                    </Menu>
                </div>

                <div className='col-md-9 pt-3'>
                    {loading ? (
                        <h4 className='text-danger'>Loading...</h4>
                    ) : (
                        <h4 className='text-danger'>Products</h4>
                    )}

                    {products.length < 1 && allProd && <p>No products found</p>}
                    {searchProd.length < 1 && !allProd && <p>No Search products found</p>}

                {allProd ? (
                    <div className='row pb-5'>
                        {products.map((p) => (<Bounce bottom cascade><div key={p._id} className='col-md-4 mt-3'>
                        <ProductCard product={p} />
                        </div></Bounce>))}
                    </div>
                    ):( 
                    <div className='row pb-5'>
                        {searchProd.map((p) => (<div key={p._id} className='col-md-4 mt-3'>
                        <Zoom bottom cascade><ProductCard product={p} /></Zoom>
                        </div>))}
                    </div>)
                    } 
                </div>
            </div>
        </div>
    )

};

export default Shop;