/*const sayHello  = function (name) {
  console.log("Hello, "+name);
}

sayHello("Sara");*/


//console.log function outupts the result
const sayHelloToConsole = function(name){
  console.log("Hello, " +name);
}
sayHelloToConsole('John');


//return function returns value to variable, no output unless you
cosole.log it later
const returnSayHello = function(name){
  return "hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
