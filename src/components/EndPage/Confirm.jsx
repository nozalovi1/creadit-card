import React from 'react'
import './Confirm.css'
import complete from './img/complete.png'

const Confirm = () => {
  return (
    <div className="confirm">
      <div className="rounded"><img src={complete} alt="" /></div>
      <h1>Thanks You !!!</h1>
      <h2>We’ve added your card details </h2>
      <button className='continue'>Continue</button>
    </div>
  )
}

export default Confirm