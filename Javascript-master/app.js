const dinoCompare = document.getElementById("dino-compare");
const button = document.getElementById('btn');

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = `images/${this.species}.png`;
};

// Create Dino Objects

let triceratops = new Dino("Triceratops", "13000", "114", "Herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");

let tyrannosaurusrex = new Dino("Tyrannosaurus Rex", "11905", "144", "Carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");

let anklyosaurus = new Dino("Anklyosaurus", "10500", "55", "Herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");

let brachiosaurus = new Dino("Brachiosaurus", "70000", "372", "Herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");

let stegosaurus = new Dino("Stegosaurus", "11600", "79", "Herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");

let elasmosaurus = new Dino("Elasmosaurus", "16000", "59", "Carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");

let pteranodon = new Dino("Pteranodon", "44", "20", "Carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");

let pigeon = new Dino("Pigeon", "0.5", "9", "Herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");


let dinoObject = [triceratops, tyrannosaurusrex, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];



//create human Constructor
// function Human(species, humanHeight, humanWeight, humanDiet) {
//   this.species = species;
//   this.humanHeight = humanHeight;
//   this.humanWeight = humanWeight;
//   this.humanDiet = humanDiet;
//   this.fact = '';
//   this.image = "images/human.png";
// }
// const humanHeight
// const humanWeight
// const humanDiet
// const humanObject = new Human(species, humanHeight, humanWeight, humanDiet);
// return humanObject;

const humanObject = {};

const humanData = function() {
  humanObject.species = document.getElementById("name").value;
  humanObject.height = (document.getElementById("feet").value * 12) + document.getElementById("inches").value;
  humanObject.Weight = document.getElementById("weight").value;
  humanObject.diet = document.getElementById("diet").value;
  humanObject.image = "images/human.png"

};


//set human in the middle of array
// const human = humanData();
    // Dino.prototype.getRandom = function(){
    //   return this.fact [Math.floor(Math.random() * this.fact.length)];
    // };
    dinoObject.splice(4, 0, humanObject);
const addTiles = function() {
  for (let i = 0; i < 10; i++) {

    //Generate tile elements
    const tileContainer = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const fact = document.createElement("p");
    const grid = document.getElementById('grid');

    //Add class to tile for styling.
    tileContainer.className = "grid-item";
    grid.appendChild(tileContainer);
    tileContainer.appendChild(title);
    tileContainer.appendChild(fact);
    tileContainer.appendChild(img);

    title.innerHTML = dinoObject[i].species; //display species name
    fact.innerHTML = compareHeight();
    img.setAttribute('src', dinoObject[i].image); // display images

};
};
//
// // Create Dino Compare Method 1
// // NOTE: Weight in JSON file is in lbs, height in inches.
// Dino.prototype.compareDiet = function(humanDiet) {
//   const human = humanData();
//
//
//   if (human.diet === this.diet) {
//     return "you have same diet as the " + this.diet;
//   } else {
//     return "you have a " + human.diet + "and the " + this.species + "is a" + this.diet
//   };
// };
// // Create Dino Compare Method 2
// // NOTE: Weight in JSON file is in lbs, height in inches.
// Dino.prototype.compareWeight = function(humanWeight) {
//   if (human.weight === this.weight) {
//     return `You are same weight as the ${this.species}`;
//   } else if (human.weight < this.weight) {
//     return `${this.sepcies} weigh ${dthis.weight - human.weight} lbs more than ${this.human}`;
//   } else {
//     return `You weigh ${human.weight - this.weight} lbs more than ${this.species}`;
//   };
// };
// // Create Dino Compare Method 3
// // NOTE: Weight in JSON file is in lbs, height in inches.
//
// Dino.prototype.compareHeight = function(humanHeight) {
//
//
// const compareDiet = Dino.prototype.compareDiet();
// const compareWeight = Dino.prototype.compareWeight();
// const compareHeight = Dino.prototype.compareHeight();

//get random facts
// source : https://stackoverflow.com/questions/48856443/transfer-random-string-to-innerhtml
// dinoObject안에있는 것들을 돌아가면서 위에 compare function과 비교하는것인데


function compareDiet(humanDiet) {
  let randomFact = Math.floor(Math.random() * 8);
  let randomDinoFact = dinoObject[randomFact];
  if (humanObject.diet === dinoObject.diet) {
    return "you have same diet as the " + randomDinoFact.species;
  } else {
    return "you have a " + humanObject.diet + " and the " + randomDinoFact.species + "is a " + randomDinoFact.diet;
  };
};

function compareHeight(humanHeight) {
  let randomFact = Math.floor(Math.random() * 8);
  let randomDinoFact = dinoObject[randomFact];
  if (humanObject.height === randomDinoFact.height) {
    return `You have same height as the ${randomDinoFact.species}`;
  } else if (humanObject.height < randomDinoFact.height) {
    return `${randomDinoFact.species} is ${randomDinoFact.height - humanObject.height} inches taller than you.`;
  } else {
    console.log(`You are ${humanObject.height - randomDinoFact.height} inches taller than ${randomDinoFact.species}.`);
  };
};

function compareWeight(humanWeight) {
  if (humanObject.weight < randomDinoFact.weight) {
    return `${randomDinoFact.species} weights ${randomDinoFact.weight - humanObject.weight} lbs more than ${humanObject.species}`;
  } else if (humanObject.weight > randomDinoFact.weight) {
    return `You weigh ${humanObject.weight - randomDinoFact.weight} lbs more than ${randomDinoFact.species}`;
  } else {
    return `You are same weight as the ${randomDinoFact.species}`;
  };
};



// Remove form from screen
function hideForm() {
  document.getElementById("dino-compare").style.display = 'none';
};

//when button clicks, display infographic.
button.addEventListener('click', function(e) {
  hideForm(); //remove form

  console.log(humanData());
  console.log(dinoObject);
  addTiles();


});
