class Pokemon {
    constructor (name, message){
      this.name = name
      this.message = message

    }
    sayHello (name) {
     
      console.log(`Mi pokemon ${name} te saluda!!!`)
    }
    
    sayMessage (message) {
     
      console.log(`Mi pokemon pikachu dice: ${message}`)
    }
    
}





module.exports = Pokemon

    