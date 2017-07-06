// Phase I: Callbacks
//
// Write a function titleize that takes an array of names and a function (callback).
// titleize should use Array.prototype.map to create a new array full of titleized versions of each name -
// titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt".
// Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each
// titleized name.
//
// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined


function titleize(names, callback) {
  //defining the function
  let titleized = names.map(name => `Mx ${name} Jingleheimer Schmidt`);
  callback(titleized);
}
// calling the function
titleize(["liz", "Alex", "Lucy"],(names) => {
  names.forEach(name => console.log(name));
});


// Phase II: Constructors, Prototypes, and this
//
// First write a constructor function for an elephant. Each elephant should have a name, height (in inches),
//and array of tricks in gerund form (e.g. "painting a picture" rather than "paint a picture").
//
// Next write a few prototype functions that will be shared among all elephants:
//
// Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
// Hint: look up some JS Math methods!
function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}
Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes phrRRRRRRRRRRR!!!!`);
}
Elephant.prototype.grow = function(){
  this.height += 12;
}

Elephant.prototype.addTrick(trick) = function(){
  this.tricks.push(trick);
}

// print out a random trick, e.g. "(name) is (trick)!"
Elephant.prototype.play = function(){
  let trickindex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickindex]}`);
}
Elephant.paradeHelper = function(elephant){
  console.log(`${elephant.name} is troting by!`)
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

//Closures

function dinerBreakfast() {
  order = "I like some eggs and bacon";
  console.log(order);
  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  }
}
