import React, {useState} from 'react';
import UserNav from '../../components/nav/UserNav';
import AdminNav from '../../components/nav/AdminNav';
import {useSelector} from 'react-redux';
import {auth} from '../../firebase';
import {toast} from 'react-toastify';

const Password = () => {
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const {user} = useSelector((state) => ({...state}));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //
    console.log(password);
    await auth.currentUser.updatePassword(password)
    .then(() => {
      //
      setLoading(false);
      setPassword('');
      toast.success('Password Updated');
    })
    .catch(err => {
      toast.error(err.message);
      setLoading(false);
    })
  }


  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
          <label>Your Password</label>
          <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              className='form-control'
              placeholder='Enter new password'
              disabled={loading}
              value={password}
           />
           <button className='btn btn-info' disabled={!password || password.length<6 || loading}>Submit</button>
      </div>
  </form>
);

  return (
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
          <div className='col'>
            {loading ? (
              <h4 className='text-danger'>Loading</h4>
            ) : (
              <h4>Password update page</h4>
            )}
              {passwordUpdateForm()}
          </div>
      </div>
    </div>
  );
}

export default Password;
