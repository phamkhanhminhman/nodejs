function success(code, message, data, res) {
    let resBody = {
        'status' : true,
        'code': code,
        'message': message,
    }
    resBody.data = data
    res.status(code).json(resBody);
    
}


module.exports = {success:success};