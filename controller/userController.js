const userServices = require('../services/userServices');
const constant = require('../constant/index');

module.exports.signup = async(req, res) => {

    let response = { ...constant.defualtServerResponces }
    try {
        const result = await userServices.userSignup(req.body)
        response.body = result;
        response.status = 200;
        response.message = constant.userMessage.SIGNUP

    } catch (error) {
        console.log(constant.somthingWentWrong + ': signup', error.message);
        response.message = error.message;
    }
    return res.status(response.status).send(response)
}

module.exports.login = async(req, res) => {
    let response = { ...constant.defualtServerResponces }
    try {
        const result = await userServices.userLogin(req.body)
        response.body = result;
        response.status = 200;
        response.message = constant.userMessage.LOGIN

    } catch (error) {
        console.log(constant.somthingWentWrong + ': login', error.message);
        response.message = error.message;
    }
   res.status(response.status).send(response);
}