
const UserService = require('./../../app/services/UserService')
describe("Test for UserService",()=>{
   test("1.Create a new user using the UserService",()=>{ 
    const user = UserService.create(1,"JaimeRH", "Jaime")
    expect(user.username).toBe("JaimeRH")
    expect(user.name).toBe("Jaime")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
   })

   test("2.Get all user data in a list",()=>{ 
    const user = UserService.create(1, "JaimeRH", "Jaime")
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("JaimeRH")
    expect(userInfoInList[2]).toBe("Jaime")
    expect(userInfoInList[3]).toBe("Sin bio")
   })
   
   test("3.Update username",()=>{ 
      const user = UserService.create(1, "JaimeRH", "Jaime")
      UserService.updateUserUsername(user, "JaimeRomero")
      expect(user.username).toBe("JaimeRomero")
      
     })
   
   test("4.Given a list of users give me the the list of usernames",()=>{ 
      const user1 = UserService.create(1, "JaimeRH1", "Jaime")
      const user2 = UserService.create(1, "JaimeRH2", "Jaime")
      const user3 = UserService.create(1, "JaimeRH3", "Jaime")
      const usernames = UserService.getAllUserNames([user1, user2, user3])
      expect(usernames).toContain("JaimeRH1")
      expect(usernames).toContain("JaimeRH2")
      expect(usernames).toContain("JaimeRH3")
      
     })

})