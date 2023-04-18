import React from 'react'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
// import { products } from '../../src/data';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../redux/cart';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleDeleteItem = (cartId) => {
    dispatch(removeProduct(cartId));
  };

  return (
    <div className="cart">
      <div className="cart-wrapper">
        <h1> YOUR CART </h1>
        <div className="top">
          <Link to='/products/all' > <button> CONTINUE SHOPPING</button> </Link>
          <div className="top-texts">
            <span className="top-text">Shopping cart({cart.quantity})</span>
            <span className="top-text">Whishlist(0)</span>
          </div>
          <button className="button-filled"> CHECKOUT</button>
        </div>
        <div className="bottom">
          <div className="info">
            {
              cart.products && cart.products.map((product, idx) => (
                <div key={idx}>
                  <div className="product">
                    <div className="product-detail">
                      <img src={product.img} alt={product.alt} />
                      <div className="details">
                        <span className="product-name"> {product.title}</span>
                        <span className="product-id"><b> ID: </b> {product._id}</span>
                        <div className="product-color" style={{backgroundColor: `${product.color}`}} > </div>
                        <span className="product-size"> <b> SIZE: </b> {product.size} </span>
                      </div>
                    </div>
                    <div className="price-detail"> 
                      <div className="product-amount-container">
                        <AddIcon />
                        <span className="product-amount">{product.quantity}</span>
                        <RemoveIcon />
                      </div>
                      <div className="product-price">$ {product.quantity * product.price}</div>
                    </div>
                    <div className="cart-item-action">
                      <DeleteIcon onClick={() => handleDeleteItem(product.cartId)} className="remove-cart-item" />
                    </div>
                  </div>
                  <hr />
                </div>
                
              ))
            }
            
          </div>
          <div className="summary">
            <h1 className="summarry-title">
              ORDER SUMMARY
            </h1>
            <div className="summary-item">
              <span className="summary-item-text"> Subtotal </span>
              <span className="summary-item-price"> $ {cart.total} </span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text"> Estimated Shipping </span>
              <span className="summary-item-price"> $ 4.99 </span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text"> Shipping Discount </span>
              <span className="summary-item-price"> $ -4.99 </span>
            </div>
            <div className="summary-item total">
              <span className="summary-item-text"> Total </span>
              <span className="summary-item-price"> $ {cart.total} </span>
            </div>
            <button>Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
