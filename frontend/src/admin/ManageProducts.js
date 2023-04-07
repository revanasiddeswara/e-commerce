import React from 'react'
import Base from "../core/Base";
import { isAuthenticated } from '../auth/helper/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {  deleteProduct, getProducts } from './helper/adminapicall';
import { useEffect } from 'react';



const ManageProducts=() =>{
    const [products,setProducts]=useState([])
    const {user,token}=isAuthenticated();
    const preload=()=>{
        getProducts().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setProducts(data)
            }
        })
    }
const deleteThisProduct=productId=>{
    deleteProduct(productId,user._id,token).then(data=>{
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
     
      <h2 className="mb-4 text-dark">All Products</h2>
      
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-dark my-3">Total products : {products.length}</h2>

         {products.map((product,index)=>{
           return(  <div key={index} className="row text-center mb-2 ">
             <div className="col-4">
               <h3 className="text-dark text-left">{product.name}</h3>
             </div>
             <div className="col-4">
               <Link
                 className="btn btn-success"
                 to={`/admin/product/update/${product._id}`}
               >
                 <span className="">Update</span>
               </Link>
             </div>
             <div className="col-4">
               <button onClick={() => {
                   return deleteThisProduct(product._id)
               }} className="btn btn-danger">
                 Delete
               </button>
             </div>
           </div>)
         })}
        </div>
      </div>
      </div>
    </Base>
  )
}

export default ManageProducts;