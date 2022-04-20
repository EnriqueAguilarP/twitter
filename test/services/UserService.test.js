const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test('1 Create a new user using the UserService', () => {
      const user = UserService.create(301578, "enriqueAguilarP", "Enrique Aguilar")
      expect(user.id).toBe(301578)
      expect(user.username).toBe("enriqueAguilarP")
      expect(user.name).toBe("Enrique Aguilar")
      expect(user.bio).not.toBeUndefined()
    });

    test('2 Get all user data in a list', () => {
        const user = UserService.create(301578, "enriqueAguilarP", "Enrique Aguilar")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(301578)
        expect(userInfoList[1]).toBe("enriqueAguilarP")
        expect(userInfoList[2]).toBe("Enrique Aguilar")
        expect(userInfoList[3]).toBe("Sin bio")
      });
})