const myArr =[1,2,3,4,5]// this is array with the square brakets
const myArr2=["shaktiman","naagraj"]// we can declare many things
const myArr3= new Array(1,2,3,4,5,6,7)// this a the another way to decalare the array
// console.log(myArr[1]);
const emty=[]// declare the empty array
myArr.push(6);// push at the last
   
// many other method also 

// slice and splice method
myArr.slice(1,4)// this will not manupalte the original array
// console.log(myArr)
myArr.splice(1,4)// this will manipulate the array
// console.log(myArr)

myArr.push(myArr2)// it will push the whole array at the last index 
// console.log(myArr)
// console.log(myArr[2][1])// in this way we can access the element of array in array

console.log(Array.isArray("chansa"))// check if it is a array
console.log(Array.from("chansa"))// convert to array 
let score = 100
let score1= 200
let score2= 300

console.log(Array.of(score,score1,score2))// convert the variable into array





