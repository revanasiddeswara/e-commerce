const Category=require("../models/cataegory")

exports.getCategoryById=(req,res,next,id)=>{
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400).json({
                error : "category not found"
            })
        }
        req.category=cate;
        next()
    })
}

//create category
exports.createCategory=(req,res)=>{
    const category=new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error : "You are not able to create category"
            })
        }
        res.json({category})
    })
}

//getting category
exports.getCategory=(req,res)=>{
    return res.json(req.category)
};

//get all category
exports.getAllCategory=(req,res)=>{
    Category.find().exec((err,categories)=>{
        if(err){
            return res.status(400).json({
                error : "category not found"
            })
        }
        res.json(categories)
    })
}

//update category
exports.updateCategory=(req,res)=>{
    const category=req.category;
    category.name=req.body.name;

    category.save((err,updateCategory)=>{
        if(err){
            return res.status(400).json({
                error : "Failed to update"
            })
        }
        res.json(updateCategory)
    })

}

exports.removeCategory=(req,res)=>{
    const category=req.category
    category.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error : `Failed to delete ${category.name} category` 
            })
        }
        res.json({
            message:`successfully delete ${category.name} category`
        })
    })
}

