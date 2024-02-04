const e = require("express");
const UserService = require("../services/userService");

class UserController{
    
    //create => POST
    create = async(req,res,next) => {
        try {
            const {username, email, phone, password,age} = req.body;
            // abc();
            //Gọi đến tầng service
            let data = {
                username, email, phone, password,age
            }

            let dataUser = {
                username, email, phone, password
            }

            const userSignUp = await UserService.checkSignUp(dataUser)

            if (userSignUp) {
                res.status(200).json({
                    'msg': userSignUp
                })
            } else {
                const user = await UserService.createUser(data)
                res.status(200).json({
                    'msg' : 'Đăng ký thành công !'
                })
            }

        } catch (error){
            next (error);
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
            const {username, email, phone, password,age} = req.body;
            const{id} = req.params;
            // abc();
            //Gọi đến tầng service
            let data = {
                username, email, phone, password,age
            }
            const result = await UserService.updateUser(id,data);

            if(result) {
                res.status(200).json({'msg': `Update thành công`});
            }else {
                throw new Error(`Không thành công`);
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