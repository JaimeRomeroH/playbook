const spiderman = require('./../app/spiderman')
describe("Unit test spiderman class", () => {
    test('Test 2: Use the method getInfo()', () => {
      const tomHolland = new spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
      
    });
  })