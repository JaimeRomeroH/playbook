describe("Unit test spiderman class", () => {
    test('Test 1: Create an spiderman object', () => {
      const andrewGarfield = new spiderman("Spiderman Sony", 31, "Andrew Garfield", 31, "Sony")
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(31);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })