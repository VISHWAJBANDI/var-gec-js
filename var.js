

      



Topic :  Var, GEC, dataTypes (primitive & non-primitive )

Task :1.   var person = {
name: "Alice",
age: 30,
city: "New York"
};

delete person.city;
person.country = "USA";
person.age = 31;

console.log(person);
// o/p: { name: "Alice", age: 31, country: "USA" }

Options:
{ name: "Alice", age: 31, city: "New York", country: "USA" }
{ name: "Alice", age: 30, country: "USA" }
{ name: "Alice", age: 31, country: "USA" }
{ name: "Alice", city: "New York", country: "USA" }



var smartphone = {
brand: "Samsung",
model: "Galaxy S21",
price: 799
};
delete smartphone.model;

Options:
delete smartphone.brand;
delete smartphone.model;
smartphone.model = null;
remove smartphone.model;


var book = {
title: "Learn JavaScript",
author: "John Smith",
pages: 400
};

Options:
book.genre = "Programming";


var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];
console.log([3][2])

var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];
console.log([2][2][2][2][0])






