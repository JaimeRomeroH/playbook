const Reader = require('../utils/Reader');
class ExplorerService{
    static filterByMission(explorers, mission){
        this.explorers = explorers
        this.mission = mission
        
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
        
    }
   
}

module.exports = ExplorerService;