const Reader = require('../lib/utils/Reader');
const ExplorerService = require('../lib/services/ExplorerService')

describe("Unit Tests for ExplorerService Class", () => {
    test('Test 1: Unit Tests for ExplorerService Class', () => {

     const explorers = Reader.readJsonFile("explorers.json"); 
     const explorerMission = ExplorerService.filterByMission(explorers, "node")
     const array = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]
     expect(explorerMission).toStrictEqual(array)
    });
  })