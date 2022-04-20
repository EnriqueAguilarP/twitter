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

      test('3 Update username', () => {
        const user = UserService.create(301578, "enriqueAguilarP", "Enrique Aguilar")
        UserService.updateUserUsername(user, "jesusAguilar")
        expect(user.username).toBe("jesusAguilar")
      });

      test('4 Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(301578, "enriqueAguilar1", "Enrique Aguilar")
        const user2 = UserService.create(321588, "enriqueAguilar2", "Enrique Aguilar")
        const user3 = UserService.create(361548, "enriqueAguilar3", "Enrique Aguilar")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("enriqueAguilar1")
        expect(usernames).toContain("enriqueAguilar2")
        expect(usernames).toContain("enriqueAguilar3")
      });
})