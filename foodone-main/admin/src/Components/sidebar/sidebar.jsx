import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const sidebar = () => {
  return (
    <div className='side'>
      <div className="options">
        <div className="option">
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </div>
        <div className="option">
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </div>
        <div className="option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default sidebar