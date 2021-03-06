import React from 'react';
import  {Select} from 'antd';
import { LaptopOutlined } from '@ant-design/icons';

const {Option} = Select;

const ProductUpdateForm = ({handleChange, categories ,selectedCategory, handleSubmit,setValues, handleCategoryChange, arrayOfSubs, setArrayOfSubIds, subOptions, values}) =>{
  //Destructurung
  const {
      title,
      description,
      price,
      address,
      landmark,
      city,
      category,
      phoneNumber, 
      subs,
      shipping,
      quantity,
      images,
      colors,
      brands ,
      color,
      brand } = values;

  return (
    <form onSubmit={handleSubmit}>
          <div className='form-group'>
              <label>Title</label>
              <input
                    type='text'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={handleChange}
                    required />
          </div>

          <div className='form-group'>
              <label>Description</label>
              <input
                    type='text'
                    name='description'
                    className='form-control'
                    value={description}
                    onChange={handleChange}
                    required/>
          </div>

          <div className='form-group'>
              <label>Price</label>
              <input
                    type='number'
                    name='price'
                    className='form-control'
                    value={price}
                    onChange={handleChange}
                    required />
          </div>

          <div className='form-group'>
              <label>Address</label>
              <input
                    type='string'
                    name='address'
                    className='form-control'
                    value={address}
                    onChange={handleChange}
                    required />
          </div>

          <div className='form-group'>
              <label>Landmark</label>
              <input
                    type='string'
                    name='landmark'
                    className='form-control'
                    value = {landmark}
                    onChange={handleChange}
                    required/>
          </div>

          <div className='form-group'>
              <label>City</label>
              <input
                    type='string'
                    name='city'
                    className='form-control'
                    value={city}
                    onChange={handleChange}
                    required />
          </div>

          {/* <div className='form-group'>
              <label>Shipping</label>
              <select
                  name='shipping'
                  className="form-control"
                  onChange={handleChange}
                  value={shipping === 'Yes' ? 'Yes' : 'No'}>
                  <option value='No'>No</option>
                  <option value='Yes'>Yes</option>
              </select>
  </div>*/}

          <div className='form-group'>
              <label>Contact Number</label>
              <input
                    type='number'
                    name='phoneNumber'
                    className='form-control'
                    value={phoneNumber}
                    onChange={handleChange}
                 />
          </div>

         {/* <div className='form-group'>
              <label>Color</label>
              <select
                  name='color'
                  className="form-control"
                  onChange={handleChange}
                  value={color}>
                  {colors.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
          </div>

          <div className='form-group'>
              <label>Brand</label>
              <select
                  name='brand'
                  className="form-control"
                  onChange={handleChange}
                  value={brand}>
                  {brands.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
          </div> */}

          <div className='form-group'>
            <label>Category</label>
            <select
                name='category'
                className='form-control'
                onChange={handleCategoryChange}
                value={selectedCategory ? selectedCategory : category._id}>
                {categories.length >0 &&
                  categories.map((c) => (
                    <option key={c._id} value={c._id}>
                        {c.name}
                    </option>
                ))}
            </select>
          </div>



          <div>
            <label>Sub Categories</label>
             <Select
                  mode='multiple'
                  style={{width: '100%'}}
                  placeholder="Please Select"
                  value={arrayOfSubs}
                  // multiple = {true}
                  onChange={value => setArrayOfSubIds(value)}>

                {subOptions.length &&
                  subOptions.map((s) => (
                    <Option key={s._id} value={s._id}>
                        {s.name} :::
                    </Option>))}
            </Select>
          </div>
          <br/>
          <button className='btn btn-outline-success'>Submit</button>
    </form>
  )
}


export default ProductUpdateForm;
