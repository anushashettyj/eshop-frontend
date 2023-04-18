import React from 'react'
import Category from './Category';
import { categories } from '../data';
const Categories = () => {
  return (
    <div className="categories">
      <div className="section-header">
        <h1> Shop by Category</h1>
        <button>VIEW ALL</button>
      </div>
      <div className="categories-content">
        {
          categories.map((item) => (
            <Category key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Categories
