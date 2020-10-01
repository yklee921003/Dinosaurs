
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


let dinoObject = [triceratops,tyrannosaurus, anklyosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];
//dinoObject에 i를 붙어야 할;


  //create human objects
 function Human(humanName, humanHeight, humanWeight, humanDiet){
   this.humanName = humanName;
   this.humanHeight = humanHeight;
   this.humanWeight = humanWeight;
   this.humanDiet = humanDiet;
   this.image = "images/human.png";
 }

  const humanData = function(){
      const humanName = document.getElementById("name").value;
      const humanHeight = (document.getElementById("feet").value * 12)+ document.getElementById("inches").value;
      const humanWeight = document.getElementById("weight").value;
      const humanDiet = document.getElementById("diet").value;
      const humanObject = new Human(humanName, humanHeight, humanWeight, humanDiet);
      return humanObject;
  };

    // Use IIFE to get human data from form



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
 Dino.prototype.compareDiet = function(humanDiet){
   if (human.diet === dinoObject.diet ){
     return "you have same diet as the" + dinoObject.diet;
   }else{
     return "you have a " + human.diet + "and the " + dinoObject.species + "is a" + dinoObject.diet
   };
 };
   // Create Dino Compare Method 2
   // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function(humanWeight){
  if (human.weight === dinoObject.weight){
    return `You are same weight as the ${dinoObject.species}`;
  }else if (human.weight < dinoObject.weight){
    return `${dinoObject.sepcies} weigh ${dinoObject.weight - human.weight} lbs more than ${dinoObject.human}`;
  }else{
    return `You weigh ${human.weight - dinoObject.weight} lbs more than ${dinoObject.species}`;
  };
};
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.compareHeight = function(humanHeight){
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

const createTile = function(){
  for (let i = 0; i < 8; i++){
    const newTile = document.createElement('div');
    const tileTitle = document.createElement('h3');
    const titleImg = document.createElement('img');
    const titleFact = document.createElement('p');

    newTitle.className = 'grid-item';
    grid.appendChild(newTile);
    newTile.appendChild(tileTitle);
    newTile.appendChild(tileImg);
    newTile.appendChild(titleFact);

    tileTitle.innerHTML = dinoObject[i].species;
    titleImg.setAttribute('src',dinoObject[i].image);
  };
};




    //display grid


    //when button is clicked, display infographic

    // Remove form from screen

    function hideForm (){
      document.getElementById("dino-compare").style.display = 'none';
    };

    const button = document.getElementById('btn');

    button.addEventListener('click',function(e){
      hideForm(); //remove form
      console.log(humanData());
      // randomSelectImg();
      console.log(dinoObject);
    });






//     function randomSelectImg(){
//     let randomDino = Math.floor(Math.random() * 8) + 1;
//     let randomImg = dinoObject[randomDino];
//     let dinoRandomImg = randomImg.species.toLocaleLowerCase() + ".png";
//     let dinoRandomImgSrc = "images/" + dinoRandomImg;
//     document.getElementById('grid').setAttribute('src',dinoRandomImgSrc);
// };

// On button click, prepare and display infographic
