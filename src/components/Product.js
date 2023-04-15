import React from 'react'
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = ({item}) => {
  console.log('---product--', item)
  return (
    <div className="product">
      <div className="circle"></div>
      <img src={'../'+item.img} alt={item.alt} />
      <div className="info">
        <div className="icon">
          <Link to={`/product/find/${item._id}`} >
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className="icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Product
