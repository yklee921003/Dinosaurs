
    // Create Dino Constructor
function Dino(species,weight,height,diet,where,when,fact){
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
};

    // Create Dino Objects

let triceratops = new Dino("Triceratops",13000,114,"herbavor","North America","Late Cretaceous","First discovered in 1889 by Othniel Charles Marsh");

let tyrannosaurus = new Dino("Tyrannosaurus Rex",11905,144,"carnivor","North America","Late Cretaceous","The largest known skull measures in at 5 feet long.");

let anklyosaurus = new Dino("Anklyosaurus",10500,55,"herbavor","North America","Late Cretaceous","Anklyosaurus survived for approximately 135 million years.");

let brachiosaurus = new Dino("Brachiosaurus",70000,"372","herbavor","North America","Late Jurasic","An asteroid was named 9954 Brachiosaurus in 1991.");

let stegosaurus  = new Dino("Stegosaurus",11600,79,"herbavor","North America, Europe, Asia","Late Jurasic to Early Cretaceous","The Stegosaurus had between 17 and 22 seperate places and flat spines.");

let elasmosaurus = new Dino("Elasmosaurus",16000,59,"carnivor","North America","Late Cretaceous","Elasmosaurus was a marine reptile first discovered in Kansas.");

let pteranodon  = new Dino("Pteranodon",44,20,"carnivor","North America","Late Cretaceous","Actually a flying reptile, the Pteranodon is not a dinosaur.");

let pigeon = new Dino("Pigeon",0.5,9,"herbavor","World Wide","Holocene","All birds are living dinosaurs.");

const dino
let dinoObject = [triceratops,tyrannosaurus, anklyosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];




  //create human objects
  let human = {};

  const humanData = function(){
      human.name = document.getElementById("name").value;
      human.height = (document.getElementById("feet").value * 12)+ document.getElementById("inches").value;
      human.weight = document.getElementById("weight").value;
      human.diet = document.getElementById("diet").value;
  };

    // Use IIFE to get human data from form



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
 const compareDiet = function(){
   if (human.diet === dinoObject.diet ){
     return "you have same diet as the" + dinoObject.diet;
   }else{
     return "you have a " + human.diet + "and the " + dinoObject.species + "is a" + dinoObject.diet
   };
   // Create Dino Compare Method 2
   // NOTE: Weight in JSON file is in lbs, height in inches.
const compareWeight = function(){
  if (human.weight === dinoObject.weight){
    return `You are same weight as the ${dinoObject.species}`;
  }else if (human.weight < dinoObject.weight){
    return `${dinoObject.sepcies} weigh ${dinoObject.weight - human.weight} lbs more than ${dinoObject.human}`;
  };else{
    return `You weigh ${human.weight - dinoObject.weight} lbs more than ${dinoObject.species}`;
  };
};
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

const compareHeight = function(){
  if (human.height === dinoObject.height){
    return `You have same height as the ${dinoObject.species}`;
  }else if (human.height < dinoObject.height){
    return `${dinoObject.species} is ${dinoObject.height - human.height} inches taller than you.`;
  }else{
    return `You are ${human.height = dinoObject.height} inches taller than ${dinoObject.species}.`;
  };
};

      // Generate Tiles for each Dino in Array
        // Add tiles to DOM

    // Remove form from screen
    function hideForm (){
      const removeForm = document.getElementById("dino-compare").style.display = 'none';
    }
    //when button is clicked, display infographic
    const button = document.getElementById('btn');
    button.addEventListener('click',function(e){
      hideForm(); //remove form

    });

    document.getElementById('btn').addEventListener('click',()=>{
      hide();
    });


    function hide(){
      document.getElementById('dino-compare').style.display = 'none';
    };




// On button click, prepare and display infographic
