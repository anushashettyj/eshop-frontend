import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
  }
  return (
    <div className = "product-list">
      {/* <h1 > Dresses</h1> */}
      <div className="filter-container">
        <div className="filter">
          <span>
            Filter Products
          </span>
          <select name='color' onChange={handleFilters}>
            <option disabled >Color</option>
            <option >ALL</option>
            <option >green</option>
            <option >yellow</option>
            <option >red</option>
          </select>
          <select name='size' onChange={handleFilters}>
            <option disabled >Size</option>
            <option >ALL</option>
            <option >XS</option>
            <option >S</option>
            <option >M</option>
            <option >L</option>
            <option >XL</option>
          </select>
        </div>
        <div className="filter">
          <span>
            Sort Products
            </span>
            <select onChange={(e)=> setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="desc">Price (high-low)</option>
            <option value="asc">Price (low-high)</option>
          </select>
        </div>
      </div>
      <Products cat={category} filters={filters} sort={sort} />
      <NewsLetter />
    </div>
  )
}

export default ProductList
