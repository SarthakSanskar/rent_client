import React, {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import { getOwnedProductsByCount, removeProduct } from '../../functions/product';
import AdminProductCard from '../../components/cards/AdminProductCard';
import {useSelector} from 'react-redux';
import UserNav from '../../components/nav/UserNav';
import AdminNav from '../../components/nav/AdminNav';

const OwnedProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
  
    const {user} = useSelector((state) => ({ ...state }))
    
    useEffect(() => {
      loadOwnProducts()
    },[])

    const loadOwnProducts = () => {
        setLoading(true);
        getOwnedProductsByCount(user.token)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          console.log(err);
        })
      }
    
    
      const handleRemove = (slug) => {
        let answer = window.confirm('Delete...?');
        if (answer) {
          // console.log('send delete request', slug);
          removeProduct(slug,user.token)
          .then((res) => {
            loadOwnProducts()
            toast.error(`${res.data.title} is deleted`);
          })
          .catch((err) => {
            if (err.response.status === 400) toast.error(err.response.data);
            console.log(err);
          })
        }
    
      }
      return(
        <div className='container-fluid'>
          <div className='row'>
      
      
              <div className='col-md-2'>
              {user && user.role === "subscriber" &&(
                          <UserNav />
                        )}
                    {user && user.role === "admin" &&(
                          <AdminNav />
                          )}
                  
              </div>
      
              <div className='col mt-5'>
              {loading ? (<h4 className='text-danger'>Loading</h4>) : (<h4>All Products...</h4>)}
                  <div className='row'>
                        {products.map(product =>
                              <div className='col-md-4 pb-3' key={product._id}><AdminProductCard product={product} handleRemove={handleRemove} key={product._id} /></div>
                  )}</div>
            </div>
      
      
          </div>
        </div>)
}

export default OwnedProduct;