const UserService = require('./../../app/services/UserService')
describe("Test for UserService",()=>{
   test("1.Create a new user using the UserService",()=>{ 
    const user = UserService.create(1,"JaimeRH", "Jaime")
    expect(user.username).toBe("JaimeRH")
    expect(user.name).toBe("Jaime")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
})
})