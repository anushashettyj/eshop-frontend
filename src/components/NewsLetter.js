import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1> Subscribe </h1>
      <p> Signup for latest product updates !</p>
      <div className="email-container">
        <input type="email" placeholder="Your Email"/>
        <button>
          <EmailOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
