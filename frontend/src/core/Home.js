import React,{useState,useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
// import { getProduct } from "../admin/helper/adminapicall";
import { getProducts } from "./helper/coreapicalls";
import slider from "./slider";

export default function Home() {

  const [products,setProducts]=useState([])
  const [error,setError]=useState(false)

  const loadAllProduct =()=>{
    getProducts().then(data=>{
      if(data.error){
        setError(data.error)
      }else{
        setProducts(data)
      }
    })
  }
  useEffect(()=>{
    loadAllProduct()
  },[])

  return (
    
    <Base title="Home Page" description="Welcome to the Tshirt Store"
    className='text-dark  rounded-4 mb-5'  >
      <div className="row text-center mb-5">
        {slider()}
      </div>
       <h1 className="text-dark">All Products</h1>
       <div className="row">
        {products.map((product,index)=>{
          return (
            <div key={index} className="col-3 mb-4">
              <Card product={product}/>
            </div>
          )
        })}
       </div>
      
     
    </Base>
  );
}
