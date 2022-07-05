```js
let user = {
  name: "Arya",
  sibling: ["Robb", "Ryan", "John"],
};
let allBrothers = ["Robb", "Ryan", "John"];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

[pic](/code/photo1657033903.jpeg)

2. Answer the following with reason:

- `user == newUser;` // true since newUser has same address and points to same location.
- `user === newUser;` //true since newUser has same address and points to same location.
- `user.name === newUser.name;` //true both points to same key at same address
- `user.name == newUser.name;` //true both points to same key at same address
- `user.sibling == newUser.sibling;`//true both points to same key at same address
- `user.sibling === newUser.sibling;`//true both points to same key at same address
- `user.sibling == allBrothers;` //false ,different object/arrays have different address but having same value.
- `user.sibling === allBrothers;` //false , different object/arrays have different address but having same value.
- `brothersCopy === allBrothers;` //false different object/arrays have different address but having same value.
- `brothersCopy == allBrothers;` //false different object/arrays have different address but having same value.
- `brothersCopy == user.sibling;` //true both points to same key at same address
- `brothersCopy === user.sibling;` //true both points to same key at same address
- `brothersCopy[0] === user.sibling[0];` //true both points to same value at same address
- `brothersCopy[1] === user.sibling[1];` //true points to same value at same address
- `user.sibling[1] === newUser.sibling[1];` //true both points to same value at same address
