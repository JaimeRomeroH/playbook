const User = require('./../models/User')
const UserService = require('./../services/UserService')
class UserView{
    static createUser(payload){
        if (payload === null){
            return  {error: "payload no existe"}
        }
        else if((payload.username === null || typeof(payload.username) !== 'string') || (payload.name === null || typeof(payload.name) !== 'string') ||  (payload.id === null || 
           typeof(payload.id) !== 'number')){
            return {error: "necesita tener un valor válido"}
        }
        else{
            return {name:`${payload.name}`, username:`${payload.username}`, id: payload.id}
        }
        
    }
}

module.exports = UserView;
