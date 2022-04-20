const User = require('./../models/user')
const bio = "Sin bio";
//clase con método static create sin instanciar en la clase heredada
class UserService{
    
    static create(id, username, name){
        return new User(id, username, name, bio)
    }
    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername(user, cadena){
        user.username = cadena
    }
}
module.exports = UserService