import React from 'react'
import { Link } from 'react-router-dom';
const Category = ({item}) => {
  return (
    <div className="category">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt={item.alt} />
        <div className="info">
          <h1>{item.title}</h1>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </div>
  ) 
}

export default Category
