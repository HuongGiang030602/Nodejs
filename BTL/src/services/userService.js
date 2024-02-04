const User = require("../models/User");
const bcrypt = require('bcrypt');

class UserService {

    checkUserData = async(username,password) => {
        try {
            const user = await User.findOne({ username });
            if (!user) {
                throw new Error('Tài khoản không tồn tại. Vui lòng đăng kí tài khoản!');
            }

            const decryption = await bcrypt.compare(password, user.password);
            if (!decryption) {
                throw new Error('Mật khẩu không đúng!');
            }

            return user;
        } catch (error) {
            throw new Error('Đã xảy ra lỗi khi kiểm tra dữ liệu người dùng');
        }
    }

    checkSignUp = async (data) => {
        try {
            const errors = [];

            const user = await User.findOne({ username: data.username });
            if (user) {
              errors.push('Username đã tồn tại');
            }
        
            const email = await User.findOne({ email: data.email });
            if (email) {
              errors.push('Email đã tồn tại');
            }
        
            const phone = await User.findOne({ phone: data.phone });
            if (phone) {
              errors.push('Phone đã tồn tại');
            }
        
            // Kiểm tra password
            const passwordUser = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordUser.test(data.password)) {
              errors.push('Password không đúng định dạng');
            }
        
            if (errors.length > 0) {
              return errors;
            }
        
            // Nếu không có lỗi, trả về null
            return null;
    
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
            return true;
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