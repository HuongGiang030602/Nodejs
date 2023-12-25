const jwt = require('jsonwebtoken');
class AuthController {

    login = async (req, res, next) =>{
        try {
            console.log('Login')
            const {username} = req.body;
            // check username and password
            // if true => create jwt token
            const token = jwt.sign({ username}, process.env.SECRET_KEY_JWT);

            res.status(200).json({
                token: token
            })

        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = new AuthController();