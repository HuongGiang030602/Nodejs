const e = require("express");
const UserService = require("../services/UserService");

class UserController{
    
    //create => POST
    create = async(req,res,next) => {
        try {
            const {username, email, phone, age} = req.body;
            // abc();
            //Gọi đến tầng service
            let data = {
                username, email, phone, age
            }
            const user = await UserService.createUser(data);

            console.log(`Create user !`)
            res.status(200).json({
              user
             });
        } catch (error){
            throw error;
        }
    }
    
    //get => GET
    getAll= async (req,res,next) => {
        try {
           const users = await UserService.getAll();
           res.status(200).json((
            users
           ))
        } catch (error){
            throw error;
        }
    }

    // update => PUT
    update = async(req,res,next) => {
        try {
            const {username, email, phone, age} = req.body;
            const{id} = req.params;
            // abc();
            //Gọi đến tầng service
            let data = {
                username, email, phone, age
            }
            const result = await UserService.updateUser(id,data);

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
            
            const result = await UserService.deleteUser(id);

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





module.exports = new UserController();