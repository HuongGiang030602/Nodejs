const e = require("express");

class UserController{
    
    //create => POST
    create = (req,res,next) => {
        try {
            const {username, password} = req.body;
            // abc();
            //Gọi đến tầng service
            console.log(`Create user !`)
            res.status(200).json({
              username,
              password
             });
        } catch (error){
            throw error;
        }
    }
    
    //get => GET
    get = (req,res,next) => {
        try {
            const {username, password} = req.body;
            //Gọi đến tầng service
            console.log(`Create user !`)
            res.status(200).json({
              username,
              password
             });
        } catch (error){
            throw error;
        }
    }

    // update => PUT
    update = (req,res,next) => {
        try {
            console.log(req.body);
            const {username, password} = req.body;
          
            res.status(200).json({
              username,
              password
             });
        } catch (error){
            throw error;
        }
    }

    //delete => DELETE
    delete = (req,res,next) => {
        try {
            let username = req.params.username;
            let password = req.params.password;
            console.log(username,password)

            res.status(200).json({msg: `Username: ${username},Password: ${password}`});

        } catch (error){
            throw error;
        }
    }
}





module.exports = new UserController();