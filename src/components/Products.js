import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat && cat !== 'all'
            ? `http://localhost:8080/product/find?category=${cat}`
            : `http://localhost:8080/product/find`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [cat]);

  useEffect(()=> {
    cat && filters && setFilteredProducts(
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

  const productByCategory = <div className="section1"> {cat && cat !== 'all' && cat.toUpperCase()} </div>;
  const featuredProduct = (
    <div className="section-header1">
      <h1> Featured Products </h1>
        <Link to='/products/all' > <button>VIEW ALL</button> </Link>
      </div>
  )
  const header = cat && cat === 'featured' ? featuredProduct : productByCategory;

  return (
    <React.Fragment>
        {header}
        <div className="products">
          {
            cat && cat !== 'featured'
            ? filteredProducts.map((item) => <Product key={item._id} item={item}/>)
            : cat && cat !== 'featured' 
              ? products.slice(0,8).map((item) => <Product key={item._id} item={item}/>)
              : products.map((item) => <Product key={item._id} item={item}/>)
          }
        </div>
    </React.Fragment>
  )
}

export default Products