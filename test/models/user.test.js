const User = require('./../../app/models/user')

describe("Unit test for user class", () => {
    test('Create an user object', () => {
      const enriqueAguilar = new User(301578, "enriqueAguilarP", "Enrique Aguilar", "Javascript developer", "September 2021", "April 20 2022")
      expect(enriqueAguilar.id).toBe(301578)
      expect(enriqueAguilar.username).toBe("enriqueAguilarP")
      expect(enriqueAguilar.name).toBe("Enrique Aguilar")
      expect(enriqueAguilar.bio).toBe("Javascript developer")
      expect(enriqueAguilar.dateCreated).toBe("September 2021")
      expect(enriqueAguilar.lastUpdated).toBe("April 20 2022")
    });
  })