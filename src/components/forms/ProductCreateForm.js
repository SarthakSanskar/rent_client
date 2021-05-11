import React from 'react';
import  {Select} from 'antd';

const {Option} = Select;

const ProductCreateForm = ({handleChange ,handleSubmit,handleCategoryChange,subOptions ,showSub ,setValues, values}) =>{
  //Destructurung
  const {
      title,
      description,
      price,
      address,
      landmark,
      city,
      category,
      categories,
      subs,
      phoneNumber,
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
                 required/>
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
                    required/>
          </div>

          <div className='form-group'>
              <label>Address</label>
              <input
                    type='string'
                    name='address'
                    className='form-control'
                    value={address}
                    onChange={handleChange}
                    required/>
          </div>

          <div className='form-group'>
              <label>Landmark (this will help tenants in searching locations, you can provide multiple of them)</label>
              <input
                    type='string'
                    name='landmark'
                    className='form-control'
                    value={landmark}
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
                    required/>
          </div>

          {/* <div className='form-group'>
              <label>Shipping</label>
              <select
                  name='shipping'
                  className="form-control"
                  onChange={handleChange}>
                  <option value=''>Select One</option>
                  <option value='No'>No</option>
                  <option value='Yes'>Yes</option>
              </select>
          </div> */}

          <div className='form-group'>
              <label>Contact Number :</label>
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
                  onChange={handleChange}>
                  <option value=''>Select One</option>
                  {colors.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
          </div> */}

          {/* <div className='form-group'>
              <label>Brand</label>
              <select
                  name='brand'
                  className="form-control"
                  onChange={handleChange}>
                  <option value=''>Select One</option>
                  {brands.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
          </div> */}

          <div className='form-group'>
            <label>Category</label>
            <select
                name='category'
                className='form-control'
                onChange={handleCategoryChange}>
                <option key='' value=''>Select</option>
                {categories.length >0 &&
                  categories.map((c) => (
                    <option key={c._id} value={c._id}>
                        {c.name}
                    </option>
                ))}
            </select>
          </div>



          {showSub ? (<div>
            <label>Sub Categories</label>
             <Select
                  mode='multiple'
                  style={{width: '100%'}}
                  placeholder="Please Select"
                  value={subs}
                  onChange={value => setValues({ ...values, subs: value })}>



                {subOptions.length &&
                  subOptions.map((s) => (
                    <Option key={s._id} value={s._id}>
                        {s.name} :::
                    </Option>))}
            </Select>
          </div>) : ''}
          <br/>
          <button className='btn btn-outline-success'>Submit</button>
    </form>
  )
}


export default ProductCreateForm;
