


//create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact){
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  // this.image = `image/${this.species}.png`;

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

// human object
const humanObject = {};
const humanData = function(){
  humanObject.species = "human"
  humanObject.name = document.getElementById("name").value;
  humanObject.height = (document.getElementById("feet").value * 12) + document.getElementById("inches").value;
  humanObject.weight = document.getElementById("weight").value;
  humanObject.diet = document.getElementById("diet").value;
  // humanObject.image = "images/human.png"
};
// add tile


  dinoObject.splice(4 , 0, humanObject);
  function addTiles(){
  dinoObject.forEach(dino => {
    humanData();
    //Generate tile elements
    const tileContainer = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const fact = document.createElement("p");


    // Add class to tile for styling
    tileContainer.className = "grid-item";


    if (dino.species === 'human'){
      title.innerHTML = humanObject.name;
      img.src = `images/${dino.species}.png`;
      // fact.innerHTML.style.display = "none";
    }else if (dino.species === 'Pigeon'){
      title.innerHTML = dino.species;
      fact.innerHTML = "All birds are living dinosaurs."
      img.src = `images/${dino.species}.png`;
    }else{
      title.innerHTML = dino.species;
      img.src = `images/${dino.species}.png`;
    let result = "";
    //Generate random number to choose fact from switch
    const randomObject = Math.floor(Math.random() * 7);
    switch(randomObject){
      case 1:
        result = dino.compareDiet();
        break;
      case 2:
        result = dino.compareWeight();
        break;
      case 3:
        result = dino.compareHeight();
        break;
      case 4:
        result = `The ${dino.species} was found in the year of ${dino.when}`;
        break;
      case 5:
        result = `The ${dino.species} is from ${dino.where}`;
        break;
      default:
        result = dino.fact;
        break;
    };
    fact.innerHTML = result;
  };
  // Add tiles to Dom
  const documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(tileContainer);
  tileContainer.appendChild(title);
  tileContainer.appendChild(fact);
  tileContainer.appendChild(img);

  document.getElementById("grid").appendChild(documentFragment);
  });
};
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDiet = function(humanDiet) {
  if (humanObject.diet === this.diet) {
    return "you have same diet as the " + this.diet;
  } else {
    return "you have a " + humanObject.diet + "and the " + this.species + " is a " + this.diet
  };
};
// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function(humanWeight) {
  if (humanObject.weight === this.weight) {
    return `You are same weight as the ${this.species}`;
  } else if (humanObject.weight < this.weight) {
    return `${this.sepcies} weigh ${this.weight - humanObject.weight} lbs more than ${this.human}`;
  } else {
    return `You weigh ${humanObject.weight - this.weight} lbs more than ${this.species}`;
  };
};
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.compareHeight = function(humanHeight) {
  if (humanObject.height === this.height) {
     return `You have same height as the ${this.species}`;
   } else if (humanObject.height < this.height) {
     return `${this.species} is ${this.height - humanObject.height} inches taller than you.`;
   } else {
     return (`You are ${humanObject.height - this.height} inches taller than ${this.species}.`);
   };
 };
// remove form from the screen
function hideForm(){
  document.getElementById("dino-compare").style.display = 'none'
};

// When button clicks, display infographic.
const button = document.getElementById('btn');
button.addEventListener('click', function(e){
  hideForm();
  addTiles();
  console.log(humanObject);
});
