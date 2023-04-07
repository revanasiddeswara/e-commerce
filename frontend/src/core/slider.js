import React from 'react'
import { Carousel } from 'react-bootstrap';
 const slider=()=> {
  return (
    <div>
<div >
<div className="row" >
<div >
<h3>Our Major Products</h3>
</div>
</div>
<div className="row" >
<div className=" mx-auto my-auto"  >
<Carousel>
<Carousel.Item>
<img
className="d-block w-100 border " style={{height: "300px"}}
src="https://img.freepik.com/free-vector/chemical-lab-equipment-scientific-tools-microscope-flasks-with-toxic-liquid-white-background-cartoon-medical-chemistry-laboratory-banner-design_575670-1177.jpg?w=2000"/>

</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100  border "style={{height: "300px"}}
src="https://media.istockphoto.com/id/175005911/photo/balls-isolated-on-white.jpg?s=170667a&w=0&k=20&c=3xMxFJJnVGE8cdGCvJseJRcDoCvOdfUiKwTOq9BuOsU="
alt="Second slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 border "style={{height: "300px"}}
src="https://s3.amazonaws.com/pro.brandkit.io/accounts/chairsolutions/statics/Artboard-2-opt.jpg"
alt="Third slide"
/>

</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
  )
}
export default slider