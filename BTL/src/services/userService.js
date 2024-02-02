const User = require("../models/User");

class UserService {

    checkUserData = async(username,password) => {
        try {
            const user = await User.findOne({ username, password });
            return user;
        } catch (error) {
            throw new Error('Tài khoản không tồn tại. Vui lòng đăng kí tài khoản !')
        }
    }

    checkSignUp = async (data) => {
        try {
            const user = await User.findOne({ username: data.username });
            if (user) {
                return 'Username đã tồn tại';
            }
    
            const email = await User.findOne({ email: data.email });
            if (email) {
                return 'Email đã tồn tại';
            }
    
            const phone = await User.findOne({ phone: data.phone });
            if (phone) {
                return 'Phone đã tồn tại';
            }


            //kiểm tra password, password phải có ít nhất 8 ký tự
            // ít nhất một chữ cái viết hoa, một chữ cái viết thường
            // ít nhất một chữ số
            const idPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password);
            if (!idPassword) {
                return 'Password không đúng định dạng';
            }
    
        } catch (err) {
            throw err;
        }
    }

    
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