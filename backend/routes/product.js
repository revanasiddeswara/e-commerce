const express=require("express")
const router=express.Router();

const{getProductById,
    createProduct,
    getProduct,
    photo,
    updateProduct,
    deleteProduct,
    getAllProduct,
    getAllUniqueCategory
}=require("../controllers/product");
const{isSignedIn,
    isAuthenticated,
    isAdmin
}=require("../controllers/auth");
const{getUserById}=require("../controllers/user");

//all of params
router.param("userId",getUserById);
router.param("productId",getProductById);

//actual routers
//create routes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct)

//read routes
router.get("/product/:productId",getProduct)
router.get("/product/photo/:productId",photo)

//delete route
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct)

//update route
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct)


//listing route
router.get("/products",getAllProduct)
router.get("/products/categories",getAllUniqueCategory)
module.exports=router;