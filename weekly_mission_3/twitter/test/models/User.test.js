const User = require('./../../app/models/User')

describe("Unit test for user class", () =>{
    test("Add setters", () =>{
        //Funcion a probar
        const user = new User(1, "JaimeRH", "Jaime", "Hola", "", "")

        //Validacion de resultados
        user.setusername = "JaimeAd"
        expect(user.username).toBe("JaimeAd")
        user.setbio = "New bio"
        expect(user.bio).toBe("New bio")
        
       
    });

})