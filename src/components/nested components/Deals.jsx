import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Deals() {
  return (
    <div className='DealSec'>
      <h1>this is Deal section </h1>
      <div className='NesData'>
        <NavLink className='Dchild' to="WeeklyD ">Weekly</NavLink>
        <NavLink className='Dchild' to="MonthlyD">Monthly</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Deals