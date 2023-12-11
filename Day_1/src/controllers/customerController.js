const e = require("express");

class CustomerController{
    
    //create => POST
    create = (req,res,next) => {
        try {

            console.log(req.body);
            const {username, email, address } = req.body;
            console.log(`Create customer !`)
          
            res.status(200).json({
              username,
              email, 
              address 
             });

        } catch (error){
            throw error;
        }
    }
    
    //get => GET
    get = (req,res,next) => {
        try {

            const{username, email, address} = req.query;
            console.log(`Get customer !`)
            console.log(username, email, address);
            res.status(200).json({
                username,
                email,
                address
            });
           
        } catch (error){
            throw error;
        }
    }

    // update => PUT
    update = (req,res,next) => {
        try {
            console.log(req.body);

            const {username, email, address} = req.body;
            console.log(`Update customer !`)
          
            res.status(200).json({
              username,
              email, 
              address 
             });

        } catch (error){
            throw error;
        }
    }

    //delete => DELETE
    delete = (req,res,next) => {
        try {
            let username = req.params.username;
            let email = req.params.email;
            let address = req.params.address;
            console.log(`Delete customer !`)
            console.log(username,email,address)

            res.status(200).json({
                username,
                email,
                address
            });

        } catch (error){
            throw error;
        }
    }
}





module.exports = new CustomerController();