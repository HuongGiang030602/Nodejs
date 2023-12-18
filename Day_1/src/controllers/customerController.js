const e = require("express");

const CustomerService = require("../services/CustomerService");

class CustomerController{
    
     //create => POST
     create = async(req,res,next) => {
        try {
            const {username, email, phone, age, address, gender } = req.body;
            // abc();
            //Gọi đến tầng service
            let data = {
                username, email, phone, age, address, gender
            }
            const customer = await CustomerService.createCustomer(data);

            console.log(`Create customer!`)
            res.status(200).json({
                customer
             });
        } catch (error){
            throw error;
        }
    }
    
    //get => GET
    getAll= async (req,res,next) => {
        try {
           const customers = await CustomerService.getAll();
           res.status(200).json((
            customers
           ))
        } catch (error){
            throw error;
        }
    }

    // update => PUT
    update = async(req,res,next) => {
        try {
            const {username, email, phone, age, address, gender} = req.body;
            const{id} = req.params;
            // abc();
            //Gọi đến tầng service
            let data = {
                username, email, phone, age, address, gender
            }
            const result = await CustomerService.updateCustomer(id,data);

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
            
            const result = await CustomerService.deleteCustomer(id);

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





module.exports = new CustomerController();