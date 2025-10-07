// primitive data type
// 7 type- string, number, boolean, null, undefined ,symbol,bigInt

// Reference(non primitive)

//array, objects ,functions

let userName = "someone"
let userName2=userName
userName2= "someThree"

console.log(userName)// value is as it is "someone"
console.log(userName2)// value is change "someThree"

// reason in primitive data type value is store in stack and copy is provided when we assign the same value

let objOne={
    email:"one@google.com",
    id:5
}

let objTwo = objOne
objTwo.id=6

console.log(objTwo)
console.log(objOne)// changes in one reflected in other because the non primitive (name is store in stack but the value is store in heap) when we assign the refrence of the other is given tht why it change the other one 
