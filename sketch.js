var dog,sadDog,happyDog;
var foodObj;
var foods,foodStock;
var feed,addFood;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  foodObj=new Food()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
feed=createButton("Feed the dog")
feed.position(700,95)
feed.mousePressed(feedDog)

addFood=createButton("Add Food")
addFood.position(800,95)
addFood.mousePressed(Addfoods)
}

function draw() {
  background(46,139,87);
  foodObj.display()
  drawSprites();
}

//function to read food Stock

function readStock(){
  foodObj.updatefoodStock(foodS)
}
//function to update food stock and last fed time
function updateStock(){
dog.addImage(happyDog)
}


//function to add food in stock
