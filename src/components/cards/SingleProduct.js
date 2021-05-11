import React, {useState} from 'react';
import { Button, Card, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Image from '../../images/mantu.jpeg';
import ProductListItems from './ProductListItems';
import StarRating from 'react-star-ratings';
import RatingModal from '../modal/RatingModal';
import {showAverage} from '../../functions/rating';
import {createInterestedPage} from '../../functions/user';
import InterestedForm from '../../pages/modal'
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux';

const { TabPane } = Tabs;


const initState = {
    name: '',
    email: '',
    phone_no: '',
    choose: '',
    fam_mem: '',
    date: '',
    message : ''
  }


const SingleProduct = ({ product , onStarClick ,star }) => {
    const { title, images, description, _id , phoneNumber} = product;
    const [visible, setVisible] =  useState(false);
    const [values, setValues] = useState(initState);

    const {user} = useSelector((state) => ({ ...state}) );
    console.log("Product Phone Number : ", phoneNumber)
    let phone = 7389069311
    const handleSubmit = (e) => {
        e.preventDefault();
        const resp = {to:phone, 
                        body: values}
        console.log('&&&&&&&&&&&&&' , resp);

        
        createInterestedPage(resp)
        .then(res => {
          console.log(res);
          toast.success("Submission Completed");
          window.alert(`Message  is created`);
          onClose();
        })
        .catch((err) => {
          console.log(err);
          // if (err.response.status === 400) toast.error(err.response.data);
          toast.error(err.response.data.err);
        })
      };
    
    
      const handleChange = (e) => {
        //
        // console.log('%%%%%%%%%%' , e)
        setValues({...values, [e.target.name]: e.target.value })
        // console.log(e.target.name, '-------------', e.target.value);
      }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <InterestedForm setValues={setValues} onClose={onClose} visible={visible} values={values} handleSubmit={handleSubmit} handleChange={handleChange} />
            <div className='col-md-7'>
                {images && images.length ? (<Carousel showArrows={true} autoPlay infiniteLoop autoFocus={true}>
                    {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
                </Carousel>) : (
                    <Card
                        cover={
                            <img src='https://asean2019.go.th/wp-content/themes/Asean2019/assets/images/img_search%20notfound.svg' alt = 'Image loading'
                                className='mb-3 card-iamges' />
                        }
                    ></Card>
                )}

                <Tabs type='cards'>
                    <TabPane tab='Description' key='1'>
                        {description && description}
                    </TabPane>

                    <TabPane tab='More' key='2'>
                        Call us on *** *** **** to learn more about Products .
                    </TabPane>
                </Tabs>
            </div>


            <div className='col-md-5'>
                <h1 className='bg-info p-3'>{title}</h1>
                    {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : <div className = 'text-center pt-1 pb-3' > No Rating Yet</div>}
                <Card
                    actions={[
                        <>
                        <ShoppingCartOutlined onClick={showDrawer} className='text-success' /><br />
                        Contact Owner
                        </>,
                    //     <Link to='/'>
                    //         <HeartOutlined className='text-info' /><br />
                    // Add to wishlist
                    // </Link>,

                        <RatingModal>
                            <StarRating
                                name={_id}
                                numberOfStars={5}
                                rating={star}
                                changeRating = {onStarClick}
                                isSelectable={true}
                                starRatedColor="red"
                            />
                        </RatingModal>
                    ]}>
                    <ProductListItems product={product} />
                </Card>
            </div>
        </>

    );
};

export default SingleProduct;