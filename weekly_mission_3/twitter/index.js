const User = require('./app/models/User');
const user = new User(1, "JaimeRH", "Jaime", "Hola", "", "")
console.log(user)
console.log(user.getid)
console.log(user.getusername)
console.log(user.getname)
console.log(user.getbio)
console.log(user.dateCreated)
console.log(user.getlastUpdated)
