const User = require('../database/model/User');
const constant = require('../constant/index');
const {formatMongoData} = require('../helper/dbHelper')

module.exports.userSignup = async ({ email, password }) => {

    try {
        const user = await User.findOne({ email });
        if (user) {
            throw new Error(constant.userMessage.DUPLICATE_EMAIL)
        }else{
            let register = new User({ email, password });
            await register.save();
            return formatMongoData(register);
        }
       
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.userLogin = async ({ email }) => {

    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error(constant.userMessage.DUPLICATE_CREDANTIAL)
        }
        return formatMongoData(user)
    } catch (error) {
        throw new Error(error.message)
    }
}