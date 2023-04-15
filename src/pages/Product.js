import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewsLetter from '../components/NewsLetter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cart';
import { publicRequest } from '../../src/requestProcessor';

const Product = () => {
  const id = useLocation().pathname.split('/')[3];
  console.log({id});
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/product/find/' + id);
        console.log({res})
        setProduct(res.data);
        setColor(res.data.color[0])
        setSize(res.data.size[0])
      } catch (err) {
        console.log({err});
      }
    };
    getProduct();
  }, [id])

  const handleQty = (type) => {
    if (type === 'remove') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleAddtoCart = () => { 
    dispatch(addProduct({...product, quantity, size: size || product.size[0], color: color || product.color[0]}))
  };

  return (
    <div className="product-page">
      <div className="product-page-wrapper">
        <div className="img-container">
          <img src={'../../'+product.img} key={product.id }alt={product.alt}/>
        </div>
        <div className="info-container">
          <h1>{product.title}</h1>
          <p>
            {product.desc}
          </p>
          <span className="price">$ {product.price}</span>
          <div className="filter-container">
            <div className="filter">
              <span className="filter-title">Color</span>
              {product.color && product.color.map((color, idx) => (
                <div className="filter-color" 
                  style={{backgroundColor: `${color}`}} 
                  key={idx} 
                  onClick={() => setColor(color)}/>
              ))}
            </div>
            <div className="filter">
              <div className="filter-title">Size</div>
              <select className="filter-size" onChange={(e) => setSize(e.target.value)}>
                {product.size && product.size.map((size, idx) => (
                  <option key={idx}> {size} </option>
                ))}
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              Qty: 
              <RemoveIcon onClick={() => handleQty('remove')} />
              <span className="quantity"> {quantity} </span>
              <AddIcon onClick={() => handleQty('add')}/>
            </div>
            <button onClick={handleAddtoCart}>Add To Cart</button>
          </div>
          <div className='selected-color'>
            <div> Selected Color:   </div><div className="product-color" style={{backgroundColor: `${color}`}} ></div>
          </div>
          <p>
            Selected Size:  { size }
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default Product
