import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = ({cat, filters, sort}) => {
  console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat 
            ? `http://localhost:8080/product/find?category=${cat}`
            : `http://localhost:8080/product/find`
        );
        console.log(res);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [cat]);

  useEffect(()=> {
    cat && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key, val]) => val === 'ALL' || item[key].includes(val))
      )
    );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  }, [sort]);

  return (
    <React.Fragment>
        <div className="section-header"> {cat && cat.toUpperCase()} </div>
        <div className="products">
          {
            cat
            ? filteredProducts.map((item) => <Product key={item._id} item={item}/>)
            : products.slice(0,8).map((item) => <Product key={item._id} item={item}/>)
          }
        </div>
    </React.Fragment>
  )
}

export default Products