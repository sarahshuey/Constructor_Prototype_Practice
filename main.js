//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name,status,color,hungry,owner) {
  'use strict'
  this.name = name
  this.status = status
  this.color = color
  this.hungry = hungry
  this.owner = owner
}

let sadie = new Dog("sadie","normal","black",false,"mason");
let moonshine = new Dog("moonshine","normal","white",true);
let atticus = new Dog("atticus","happy","golden",false);

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name,pet,feed,cool) {
'use strict'
this.name = name
this.feed = function (dog) {
  if (feed === true)
   return dog.hungry = false
}
this.cool = cool
this.pet = function (dog) {
  if (pet === true)
  return dog.status="happy"
}
}
let mason = new Human("mason",true,false,false);
let julia = new Human("julia",false,true,true);

// Instances of Human
// Needed: mason, julia
