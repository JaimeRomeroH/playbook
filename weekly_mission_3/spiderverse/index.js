const spiderman = require('./app/spiderman');
const andrewGarfield = new spiderman("Spiderman Sony", 31, "Andrew Garfield", 31, "Sony")
const tomHolland = new spiderman()
console.log(andrewGarfield.name)
console.log(andrewGarfield.age)
console.log(andrewGarfield.actor)
console.log(andrewGarfield.movies)
console.log(andrewGarfield.studio)
console.log(tomHolland.getInfo("Tom Holland", "Marvel"))