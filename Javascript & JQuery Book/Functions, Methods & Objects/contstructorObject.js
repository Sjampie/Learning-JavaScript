//blue print starts here
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.updateAge = function(){
    return ++this.age;
  };
}
//blueprint ends here
var person01 = new Person("Sam", "Tieman", 20) //create new object using the blueprint called person01
console.log(person01.firstName);

/* The big difference between a literal object and a constructor object
Is that a literal object have assigned properties while a contstructor use a blueprint so
it can make more objects using the blueprint.
*/

//Adds new propertys
person01.glasses = false;
console.log(person01.glasses);
//Delete property
delete person01.glasses
console.log(person01.glasses);
