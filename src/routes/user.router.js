const { Router } = require("express");
const { createdUser } = require("../controllers/user.controllers");


const userRouter = Router()

userRouter.post('/users', createdUser)

module.exports = userRouter