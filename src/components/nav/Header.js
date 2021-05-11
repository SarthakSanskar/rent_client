import React ,{useState} from 'react';
import { Menu,Avatar } from 'antd';
import {  AppstoreOutlined,LogoutOutlined, SettingOutlined, UserOutlined, UserAddOutlined , ShoppingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Search from '../forms/Search';
import SanskarSearch from '../forms/sanskarSearch';


const { SubMenu, Item } = Menu;    //can also be written as Menu.SubMenu  (Destruct )

const Header = () => {
  const [current, setCurrent] = useState('Home');
  let dispatch = useDispatch()
  let {user} = useSelector((state) => ({ ...state }));

  let history = useHistory();


  const handleClick = (e)=>{
    console.log(e.key);
    setCurrent(e.key)
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type:"LOGOUT",
      payload: null,
    });
    history.push('/login');
  };

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className='d-flex justify-content-between'>
        {/* <div> */}
          <Item key="Home" icon={<AppstoreOutlined />} className="float-right">
          <Link to="/">Home</Link>
        </Item>

        <Item key="shop" icon={<ShoppingOutlined />} className="float-right">
          <Link to="/shop">Shop</Link>
        </Item>

        <Item key="landing" icon={<ShoppingOutlined />} className="float-right">
          <Link to="/landing">Landing Page</Link>
        </Item>

        <Item key="about" icon={<ShoppingOutlined />} className="float-right">
          <Link to="/sanskar">AboutUs page</Link>
        </Item>

        {user && user.role === "subscriber" &&(
        <Item key="lend" icon={<ShoppingOutlined />} className="float-right">
          <Link to="/user/product">Want to Lend?</Link>
        </Item>)}
 

        {user && user.role === "admin" &&(
        <Item key="lend" icon={<ShoppingOutlined />} className="float-right">
              <Link to="/admin/product">Want to Lend?</Link>
        </Item>

        )}

{/* </div> */}



        {
          !user &&  (<>
                      <Item key="register" icon={<UserAddOutlined />} className="float-right">
                    <Link to="/register">Register</Link>
                    </Item>
                    <Item key="login" icon={<UserOutlined />} className="float-right">
                    <Link to="/login">Login</Link>
                    </Item>
              </>)
        }



        { /* Dropdown */   }
        {
          user && (
                  <SubMenu key="SubMenu" icon={<Avatar
                    style={{
                      backgroundColor: "grey",
                      verticalAlign: 'middle',
                      marginRight: "5px"
                    }}
                    size="large"
                  >
                    S
                  </Avatar>} className="float-right" title={user.email && user.email.split('@')[0]} >

                    <Item key="profile">
                          <Link to="/user/Profile">My Profile</Link>
                    </Item>

                  {user && user.role === "subscriber" &&(
                    <Item key="setting:1">
                          <Link to="/user/products">Dashboard</Link>
                    </Item>

                  )}

                  {user && user.role === "admin" &&(
                    <Item key="setting:1">
                          <Link to="/admin/dashboard">Dashboard</Link>
                    </Item>

                  )}


                    <Item icon={<LogoutOutlined />} onClick={logout}>LogOut</Item>
                </SubMenu>
              )
        }
      <span className = 'float-right p-1'>
        <Search />
      </span>
      {/* <span className = 'float-right p-1'>
      <SanskarSearch />
      </span> */}
      </Menu>
    );
  }

export default Header;
