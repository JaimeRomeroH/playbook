class spiderman {
    constructor (name, age, actor, movies, studio) {
      this.name = name;
      this.age = age;
      this.actor = actor;
      this.movies = movies;
      this.studio = studio;
    }
    getInfo(actor, studio){
        this.actor = actor;
        this.studio = studio;
        String = `Hey, I'm ${actor} from ${studio} studio`;
        return String;
    }
  }
  
  // Esta línea nos permite exportar nuestra clase
  module.exports = spiderman