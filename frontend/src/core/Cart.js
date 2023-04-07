import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
// import StripeCheckout from "./StripeCheckout" 
import Paymentb from "./paymentb";
import { useHistory } from "react-router-dom";


const Cart = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const handleClick = () => {
    history.push('/'); 
  };

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2 className="mb-5">All Cart Products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  

  return (
    <Base
      title="Cart Page"
      description="Ready to checkout"
      className="bg-dark text-dark container rounded-4 mb-5"
    >
      <div className="container">
        <div className="row text-center">
          <div className="col-4">
            {products.length > 0 ? (
              loadAllProducts(products)
            ) : (
             
            <div>
                <h3 style={{ color: "#fff", marginTop: "27%" }}>
                No products in cart
              </h3>
              {/* <button className="btn  btn-success" onClick={handleClick}>Add To Cart</button> */}
            </div>
             
            )}
          </div>
          <div className="col-4  my-4 text-light">
            <h3>
              <Paymentb products={products} setReload={setReload} />
            </h3>
          </div>
        </div>
      </div>
    </Base>
  );
  
  
};

export default Cart;
