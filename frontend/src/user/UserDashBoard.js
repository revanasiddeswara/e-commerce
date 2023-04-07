import React from 'react'
import Base from "../core/Base";
import { isAuthenticated } from '../auth/helper/index';
import { Link } from 'react-router-dom';

const UserDashBoard=()=> {
  const{user:{name,email,role}}=isAuthenticated()
  const adminRightSide=()=>{
    return(
      <div className='card'>
        <h4 className='card-header bg-dark text-white'>User Info</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span className='badge badge-success mr-2'>Name:</span>{name}
          </li>
        
          <li className='list-group-item'>
            <span className='badge badge-success mr-2'>Email:</span>{email}
          </li>
          <li className='list-group-item'>
            <span className='badge badge-danger mr-2'>Admin Area</span>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <Base title='User Dash Board' description='welcome'
    className=' bg-dark text-dark container rounded-4 w-75 mb-5'>
     <div className='row'>
      <div className=' py-4'>
        {adminRightSide()}
      </div>
     </div>
     </Base>
     
  );
};

export default UserDashBoard;