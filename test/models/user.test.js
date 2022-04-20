const User = require('./../../app/models/user')

describe("Unit test for user class", () => {
    test('Create an user object', () => {
      const enriqueAguilar = new User(301578, "enriqueAguilarP", "Enrique Aguilar", "Javascript developer")
      expect(enriqueAguilar.id).toBe(301578)
      expect(enriqueAguilar.username).toBe("enriqueAguilarP")
      expect(enriqueAguilar.name).toBe("Enrique Aguilar")
      expect(enriqueAguilar.bio).toBe("Javascript developer")
      expect(enriqueAguilar.dateCreated).not.toBeUndefined()
      expect(enriqueAguilar.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const enriqueAguilar = new User(301578, "enriqueAguilarP", "Enrique Aguilar", "Javascript developer")
        expect(enriqueAguilar.getUsername).toBe("enriqueAguilarP")
        expect(enriqueAguilar.getBio).toBe("Javascript developer")
        expect(enriqueAguilar.getDateCreated).not.toBeUndefined()
        expect(enriqueAguilar.getLastUpdated).not.toBeUndefined()
    });

    test('Add setters', () => {
        const enriqueAguilar = new User(301578, "enriqueAguilarP", "Enrique Aguilar", "Javascript developer")
        enriqueAguilar.setUsername = "jesusAguilar"
        expect(enriqueAguilar.username).toBe("jesusAguilar")
        enriqueAguilar.setBio = "Python developer"
        expect(enriqueAguilar.bio).toBe("Python developer")
    });
  })