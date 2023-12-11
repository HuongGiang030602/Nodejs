const e = require("express");

class ProducteController{
    
    //create => POST
    create = (req,res,next) => {
        try {

            console.log(req.body);
            console.log(req.body);
            const {product_code, product_name} = req.body;
          
            res.status(200).json({
              product_code,
              product_name
             });

        } catch (error){
            throw error;
        }
    }
    
    //get => GET
    get = (req,res,next) => {
        try {

            const{product_code, product_name} = req.query;

            console.log(product_code, product_name);
        
            res.status(200).json({msg: `MaSP: ${product_code},TenSP: ${product_name}` });
           
        } catch (error){
            throw error;
        }
    }

    // update => PUT
    update = (req,res,next) => {
        try {
            console.log(req.body);
            const {product_code, product_name} = req.body;
          
            res.status(200).json({
              product_code,
              product_name
             });

        } catch (error){
            throw error;
        }
    }

    //delete => DELETE
    delete = (req,res,next) => {
        try {
            let product_code = req.params.product_code;
            let product_name = req.params.product_name;
            console.log(product_code,product_name)

            res.status(200).json({msg: `product_code: ${product_code},product_name: ${product_name}`});
        } catch (error){
            throw error;
        }
    }
}





module.exports = new ProducteController();