import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";

const Card = ({
  product,
  success=false,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name :
   "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

const getARedirect = redirect => {
  if (redirect) {
    return <div className="alert alert-success"
    >This product added to <strong>Cart successfully</strong> 
   </div>;
   
  }
}
  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        
        <button
          onClick={addToCart}
          className="btn btn-block bg-dark rounded-pill btn-outline-dark mt-2 mb-2"
        >
          Add to 
          Cart
        </button>
        
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-dark bg-white border border-dark col-sm-12"  style={{padding:"20",width:"80%"}} >
        
      <div className="card-header lead font-weight-bold text-left">{cartTitle}</div>
      <div className="card-body">
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%' ,zIndex:'1'}}>Deal Of the day</span>
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead text-dark font-weight-normal text-wrap mb-2 text-left">
          {cartDescrption}
        </p>
        <p className="font-weight-bold text-danger text-left">₹ {cartPrice}.00</p>
        <div className="row">
          <div className="col-12 ">{showAddToCart(addtoCart)}</div>
          <div className="col-12 ">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
