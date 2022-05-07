const Reader = require('../lib/utils/Reader');
const ExplorerService = require('../lib/services/ExplorerService')

describe("Unit Tests for ExplorerService Class", () => {
    test('Test 1: Unit Tests for ExplorerService Class', () => {

     const explorers = Reader.readJsonFile("explorers.json"); 
     const explorerMission = ExplorerService.filterByMission(explorers, "node")
     const arrayNode = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]
     const arrayJava = ["ajolonauta6", "ajolonauta7", "ajolonauta8", "ajolonauta9", "ajolonauta10"]
     expect(explorerMission).toStrictEqual(arrayNode)
    });

    test('Test 2: Unit Tests for ExplorerService Class', () => {
  
       const explorers = Reader.readJsonFile("explorers.json"); 
       const explorerMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
      
       expect(explorerMission).toBe(10)
      })    
 

    
  })

  