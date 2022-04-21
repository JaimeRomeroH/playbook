const MissionCommander = require('./../app/missionCommander');
describe("Unit Tests for Mission Commander Class", () => {
    test('Test 1: Unit Tests for Mission Commander Class', () => {
      const myMissionCommander = new MissionCommander("Woopa") 
      expect(myMissionCommander.name).toBe("Woopasdfsdf");
    });
  })
  