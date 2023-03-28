const UserServices = require("../services/user.services")

const createdUser = async (req,res,next) =>{
    try {
        const body = req.body
        const user = await UserServices.add(body)
        res.status(201).send(user)
    } catch (error) {
        next(error)
    }
}

module.exports ={
    createdUser,
}