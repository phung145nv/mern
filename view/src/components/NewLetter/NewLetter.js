import React from 'react'
import "./NewLetter.css"

const NewLetter = () => {
  return (
    <div className="newletter">
        <div className='container'>
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe to our newletter and stay updated</p>
        <form action="">
            <input type="text" placeholder='Your Email...' />
            <button className='btn btn-custom'>Subcribe</button>
        </form>
        </div>
    </div>

  )
}

export default NewLetter;
