const User = require('./../../app/models/User')

describe("Unit test for user class", () =>{
    test("Create an user object", () =>{
        //Funcion a probar
        const user = new User(1, "JaimeRH", "Jaime", "Hola", "", "")

        //Validacion de resultados
        expect(user.id).toBe(1)
        expect(user.username).toBe("JaimeRH")
        expect(user.name).toBe("Jaime")
        expect(user.bio).toBe("Hola")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

})