const Reader = require('../utils/Reader');
class ExplorerService{
    static filterByMission(explorers, mission){
        
        
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == `${mission}`);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
        
    }

    static getAmountOfExplorersByMission(explorers , mission){
        
        const amount = explorers.filter((explorer) => explorer.mission == `${mission}`)
        return amount.length
    }

   
   
}

module.exports = ExplorerService;