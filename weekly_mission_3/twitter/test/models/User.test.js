const User = require('./../../app/models/User')

describe("Unit test for user class", () =>{
    test("Create an user object", () =>{
        //Funcion a probar
        const user = new User(1, "JaimeRH", "Jaime", "Hola", "22-04-2022", "22-04-2022")

        //Validacion de resultados
        expect(user.id).toBe(1)
        expect(user.username).toBe("JaimeRH")
        expect(user.name).toBe("Jaime")
        expect(user.bio).toBe("Hola")
        expect(user.dateCreated).toBe("22-04-2022")
        expect(user.lastUpdated).toBe("22-04-2022")
    });

})