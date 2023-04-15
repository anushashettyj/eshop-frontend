import React from 'react'
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { logout } from '../redux/user';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const userExist = useSelector(state => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    console.log('userExist--', userExist);
  };

  return (
    <div className="navbar">
      {/* <Button variant="contained">Navbar</Button> */}
      <div className="left">
        <div className="lang">
          EN
        </div>
      </div>
      <div className="logo">
        <Link to='/' >ESHOP </ Link>
      </div>
      <div className="right">
        <div className="search">
          <input className="search-input" placeholder="Search"/>
          <SearchOutlinedIcon className="search-icon" style={{ color: 'rgb(128, 125, 125)', fontSize:16}}>
          </SearchOutlinedIcon>
        </div>
        <div className="right-menu">
          {
            !userExist && (
              <>
              <div className="right-menu-item">
                <Link to='/register' > Register </Link>
              </div>
              <div className="right-menu-item">
                <Link to='/login' > Log In </Link>
              </div>
              </>
            )
          }
          {  userExist && (
              <div className="right-menu-item">
                <Link to='/' onClick={handleLogout}> Log Out </Link>
              </div>
            )
          }
          <div className="right-menu-item">
            <Link to='/cart' >
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon/>
              </Badge>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
