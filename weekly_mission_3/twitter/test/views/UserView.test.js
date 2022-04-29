const UserView = require('./../../app/views/UserView')
describe("Test for UserView", () => {
    test('Return an error object when try to create a new user with an null payload', () =>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test('Return an error object when try to create a new user with payload with invalid properties', () =>{
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesita tener un valor válido/)

    
    })

    test('Return an error object when try to create a new user with payload with missing properties', () =>{
    const payload = {username: "username"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesita tener un valor válido/)

    
    })

    test('Create an user by a given valid payload', () =>{
        const payload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    
        
        })
})
