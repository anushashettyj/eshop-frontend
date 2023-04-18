import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import {sizeList, colorList } from '../data';
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
  }
  return (
    <div className = "product-list">
      <div className="filter-container">
        <div className="filter">
          <span>
            Filter Products
          </span>
          <select name='color' onChange={handleFilters}>
            <option disabled >Color</option>
            <option value="ALL">All Color</option>
            {
              colorList.map((color, idx) => (<option key={idx}> { color }</option>))
            }
          </select>
          <select name='size' onChange={handleFilters}>
            <option disabled >Size</option>
            <option value="ALL">All Size</option>
            {
              sizeList.map((size, idx) => (<option key={idx}> { size }</option>))
            }
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
