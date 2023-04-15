import React from 'react'

const Register = () => {
  return (
    <div className="register">
      <div className="wrapper">
        <h1> CREATE YOUR ACCOUNT</h1>
        <form className="register-form"> 
          <input placeholder="firstname" />
          <input placeholder="lastname" />
          <input placeholder="username" />
          <input placeholder="email" />
          <input placeholder="password" />
          <input placeholder="confirm password" />
          <div className="terms">
            <input type="checkbox" />
            <span> I agree to the <b>Privacy Policy</b> and <b>Terms & Conditions</b></span>
          </div>
          <button>REGISTER</button>
        </form>
      </div>
    </div>
  )
}

export default Register
