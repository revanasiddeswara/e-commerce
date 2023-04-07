import React from 'react'
import Base from "../core/Base";
import { isAuthenticated } from '../auth/helper/index';
import { Link } from 'react-router-dom';
import { deleteCategory, getCategories } from './helper/adminapicall';
import { useState } from 'react';
import { useEffect } from 'react';
const ManageCategories=() =>{

  const [categories,setCategories]=useState([])
  const {user,token}=isAuthenticated();
  const preload=()=>{
      getCategories().then(data=>{
          if(data.error){
              console.log(data.error)
          }else{
            setCategories(data)
          }
      })
  }
  const deleteThisCategory=productId=>{
    deleteCategory(productId,user._id,token).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
           preload()
        }
    })
}

useEffect(()=>{
  preload()
},[])
  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-dark mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );
  
  return (
    <Base title="Welcome admin" description="Manage products here"
    className=' container bg-secondary p-4 mb-5'>
       <div className='row bg-light rounded'>
       {goBack()}
      <h2 className="mb-4 text-dark">All Categories</h2>
      {/* <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link> */}
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-dark my-3">Total Categories : {categories.length}</h2>
      <div className='container'>

          {categories.map((category,index)=>{
           return(  <div key={index} className="row text-center mb-2 ">
             <div className="col-6">
               <h3 className="text-dark text-left">{category.name}</h3>
             </div>
             
             <div className="col-6">
               <button onClick={() => {
                   return deleteThisCategory(category._id)
               }} className="btn btn-danger">
                 Delete
               </button>
             </div>
           </div>)
         })}
        </div>
      </div>
      </div>
      </div>
    </Base>
  )
}

export default ManageCategories;