import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import './scss/main.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const userExist = useSelector(state => state.user.currentUser);
  console.log({userExist});
  return (
    <>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/find/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={
          userExist ? <Navigate to='/' /> : <Login />
        } />
        <Route path='/register' element={
          userExist ? <Navigate to='/' /> : <Register />
        } />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
