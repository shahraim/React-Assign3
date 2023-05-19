import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Deals() {
  return (
    <div className='container'>
      <h1 className='text-center'>This is Deal Section</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='d-flex justify-content-center'>
            <NavLink className='btn btn-primary mx-2' to='/deals/weeklyD'>Weekly</NavLink>
            <NavLink className='btn btn-primary mx-2' to='/deals/monthlyD'>Monthly</NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Deals;

// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'

// function Deals() {
//   return (
//     <div className='DealSec'>
//       <h1>this is Deal section </h1>
//       <div className='NesData'>
//         <NavLink className='Dchild' to="WeeklyD ">Weekly</NavLink>
//         <NavLink className='Dchild' to="MonthlyD">Monthly</NavLink>
//       </div>
//       <Outlet />
//     </div>
//   )
// }

// export default Deals