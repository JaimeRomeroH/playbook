const spiderman = require('./../app/spiderman')
describe("Unit test spiderman class", () => {
    test('Test 2: Use the method getInfo()', () => {
      const tomHolland = new spiderman()
      expect(tomHolland.getInfo("Tom Holland", "Marvel")).toBe("Hey, I'm Tom Holland from Marvel studio");
      
    });
  })