1. What will be the output and explain the reason.

```js
let obj = { name: "Arya" };
obj = { surname: "Stark" };
let newObj = { name: "Arya" };
let user = obj;
let arr = ["Hi"];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`//false Any array/object doesnt have same memory location so, they cant be equal
- What is the value of obj? // { surname: 'Stark' } since it is reassigned as { surname: 'Stark' } so old data gets replaced.
- `obj == newObj` //false since both are different objects pointing to different address.
- `obj === newObj` //false since both are different objects pointing to different address.
- `user === newObj` //false since both are different objects pointing to different address.
- `user == newObj`//false since both are different objects pointing to different address.
- `user == obj` //true since user is assigned value of obj so address of data inside both of them are same and pointing to same data.
- `arr == arr2` //true since aa is assigned value of arr2 so address of data inside both of them are same and pointing to same data.
- `arr === arr2` //true since aa is assigned value of arr2 so address of data inside both of them are same and pointing to same data.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

[pic2](./photo1657045593.jpeg)

```js
function personDetails(person) {
  person.age = 25;
  person = { name: "John", age: 50 };
  return person;
}
var person1 = { name: "Alex", age: 30 };
var person2 = personDetails(person1);
console.log(person1); //{ name: "Alex", age: 30 } since person 1 is defined as this property.
console.log(person2); //{ name: "John", age: 50 } since person2 is a function with parameter as person1 and the function updates the value of person1(inside function only) as { name: "John", age: 50 } so person 2 is { name: "John", age: 50 }.
```

3. What will be the output of the below code:

```js
var brothers = ["Bran", "John"];
var user = {
  name: "Sansa",
};
user.brothers = brothers;
brothers.push("Robb");
console.log(user.brothers === brothers); //1. true
console.log(user.brothers.length === brothers.length); //2. true
```
