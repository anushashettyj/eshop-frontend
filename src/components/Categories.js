import React from 'react'
import Category from './Category';
import { categories } from '../data';
const Categories = () => {
  return (
    <div className="categories">
      {
        categories.map((item) => (
          <Category key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default Categories
