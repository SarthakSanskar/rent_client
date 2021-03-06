import React from 'react';
import {Card} from 'antd';
import mantuPhoto from '../../images/mantu.jpeg';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import  {Link} from 'react-router-dom';



const {Meta} = Card;


const AdminProductCard = ({product, handleRemove}) => {
  //destructuring
  const {title, images, description ,slug} = product;
  return(
    <Card
        cover={
            <img src={ images && images.length ? images[0].url: 'https://asean2019.go.th/wp-content/themes/Asean2019/assets/images/img_search%20notfound.svg'}
                 style={{height: '150px', objectFit:'cover'}}
                 className='p-1 m-3'/>}

            actions={[
                  <Link to={`/user/product/${slug}`}>
                        <EditOutlined className='text-warning' />
                  </Link>,
              <DeleteOutlined onClick={() => handleRemove(slug)} className='text-danger' />
            ]}
                 >


        <Meta title={title} description={`${description && description.substring(0,29)}....`}/>
     </Card>
  )
}

export default AdminProductCard;
