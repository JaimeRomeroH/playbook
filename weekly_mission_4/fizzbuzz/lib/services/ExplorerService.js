const Reader = require('../utils/Reader');
class ExplorerService{
    static filterByMission(explorers, mission){
        
        
        const explorersByMission = explorers.filter((explorer) => explorer.mission == `${mission}`);
        
        return explorersByMission
        
    }

    static getAmountOfExplorersByMission(explorers , mission){
        
        const amount = explorers.filter((explorer) => explorer.mission == `${mission}`)
        return amount.length
    }

    

   
   
}

module.exports = ExplorerService;