
const {users} = require('../models')


class UserServices{
    static async add(body){
        try {
            const user = await users.create(body)
            return user
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;