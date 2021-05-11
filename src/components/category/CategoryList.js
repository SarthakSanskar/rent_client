import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
// import { Bounce } from 'react-toastify';
import {getCategories} from '../../functions/category'
import Bounce from 'react-reveal/Bounce';
const CategoryList = () => {
    const [categories , setCategories] = useState([]);
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getCategories().then(c => {
            setCategories(c.data);
            setLoading(false);
        })
    }, []);

    const showCategories = () => categories.map((c) => (<><Bounce bottom><div  key = {c._id} className = ' col  btn btn-outlined-primary btn-lg btn-block btn-raised m-3'>
        <Link to = {`/category/${c.slug}`}> {c.name} </Link>
    </div></Bounce></>))

    return(
        <div className ='container'>
            <div className = 'row'>
                {loading ? (<h4 className = 'text-center'>Loading...</h4>) : showCategories()}

            </div>
        </div>
    )
 };

 export default CategoryList;