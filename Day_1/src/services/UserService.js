const User = require("../models/User");

class UserService {
    async createUser(userData){
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(id,data){
        try {
            const result = await User.updateOne({_id: id} , {username: data.username});
            return true
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id,data){
        try {

            const user = await User.findById(id);
            console.log(user);
            await user.deleteOne();
           
            return true
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService();