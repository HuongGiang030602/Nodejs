const e = require("express");

const ProductService = require("../services/ProductService");

class ProductController{
    
   //create => POST
   create = async(req,res,next) => {
        try {
            const {Product_name, manufacturer, year_of_manufacture, quantity, price } = req.body;
            // abc();
            //Gọi đến tầng service
            let data = {
               Product_name, manufacturer, year_of_manufacture, quantity, price
            }
            const product = await ProductService.createProduct(data);

            console.log(`Create product!`)
            res.status(200).json({
                product
            });
        } catch (error){
            throw error;
        }
    }

    //get => GET
    getAll= async (req,res,next) => {
        try {
        const products = await ProductService.getAll();
        res.status(200).json((
            products
        ))
        } catch (error){
            throw error;
        }
    }

    // update => PUT
    update = async(req,res,next) => {
        try {
            const {Product_name, manufacturer, year_of_manufacture, quantity, price} = req.body;
            const{id} = req.params;
            // abc();
            //Gọi đến tầng service
            let data = {
               Product_name, manufacturer, year_of_manufacture, quantity, price
            }
            const result = await ProductService.updateProduct(id,data);

            if(result) {
                res.status(200).json({'msg': `Update`});
            }else {
                throw new Error(`Update fail`);
            }
        
        } catch (error){
            throw error;
        }
    }

    //delete => DELETE
    delete = async(req,res,next) => {
        try {
            const{id} = req.params;
            // abc();
            //Gọi đến tầng service
            
            const result = await ProductService.deleteProduct(id);

            if(result) {
                res.status(200).json({'msg': `delete`});
            }else {
                throw new Error(`delete fail`);
            }
        
        } catch (error){
            throw error;
        }
    }
}





module.exports = new ProductController();