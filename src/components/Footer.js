import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {payments} from '../data';
const Footer = () => {
  const centerMenu = ['Home',
    'Cart',
    'My Account',
    'WishList',
    'Cart',
    'Women',
    'Men',
    'Accessories'];
  return (
    <div className="footer">
      <div className="left">
        <h1> <Link to='/' > ESHOP </Link> </h1>
        <p> Choose from a wide variety of fashionable products from our amazing website !</p>
        <div className="social-container">
          <div className="social-icon fb">
            <FacebookIcon />
          </div>
          <div className="social-icon twitter">
            <TwitterIcon />
          </div>
          <div className="social-icon insta">
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <h3> Links </h3>
        <div className="list-container">
        {
            centerMenu.map((item, idx) => (
              <div className="list-icon" key={idx}>
                <span> {item} </span>
              </div>
            ))
          }
        </div>
        {/* <ul> 
          <li> Home </li>
          <li> Cart </li>
          <li> My Account </li>
          <li> WishList</li>
          <li> Cart</li>
          <li> Women </li>
          <li> Men</li>
          <li> Accessories</li>
        </ul> */}
      </div>
      <div className="right">
        <h3> We Accept </h3>
        <div className="pay-container">
          {
            payments.map((item, idx) => (
              <div className="pay-icon" key={idx}>
                <img src={'../'+item.img} alt={item.alt} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
