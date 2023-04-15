import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { login } from '../redux/apiRequest';
import { useSelector, useDispatch } from 'react-redux';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error, } = useSelector(state => state.user)

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
    console.log({username, password})
  }
  return (
    <div className="login">
      <div className="wrapper">
        <h1> SIGN IN</h1>
        <form className="login-form"> 
          <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin} disabled={isFetching}>SIGN IN</button>
          { error && <span className="form-error">Something went wrong !</span>}
          <Link to='/'>Forgot your passoword ?</Link>
          <Link to='/'>Create a new account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
