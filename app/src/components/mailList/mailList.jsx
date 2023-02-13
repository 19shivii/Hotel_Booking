import React from 'react'
import'./MailList.css' 
const mailList = () => {
  return (
    <div className="mail">
        <h1 className="mailList">
            Save time, save money!
        </h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default mailList