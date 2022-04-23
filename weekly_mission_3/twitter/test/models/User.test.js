const User = require('./../../app/models/User')

describe("Unit test for user class", () =>{
    test("Add getters", () =>{
        //Funcion a probar
        const user = new User(1, "JaimeRH", "Jaime", "Hola", "", "")

        //Validacion de resultados
        expect(user.getid).toBe(1)
        expect(user.getusername).toBe("JaimeRH")
        expect(user.getname).toBe("Jaime")
        expect(user.getbio).toBe("Hola")
        expect(user.getdateCreated).not.toBeUndefined()
        expect(user.getlastUpdated).not.toBeUndefined()
    });

})