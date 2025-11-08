// loops 

let arr =[1,2,3,4,5]

for(const num of arr){
    // console.log(num)
}

const greeting="hello world!"

for(const greets of greeting){
    // console.log(`this is character ${greets}`)
}
// for object we use for in loop
myObject={
    java:'java',
    cpp:'c++',
    rb:'ruby'
}

for(const key in myObject){
    //  console.log(myObject[key])
}// this we can access the value of key 

// foreach loop of Array

arr.forEach(function(value){
    // console.log(value)
})// this will print the value, we are passing the callBack function(A function with no name)

// other ways to do so

let printMe =(value) =>{
    console.log(value)
}

// arr.forEach(printMe)/// do the same thing as above

// object in array

let objArr=[
 {
    language:'java',
    extension:'j'
 },
 {
    language:'python',
    extension:'py'
 },
 {
    language:'ruby',
    extension:'rb'
 }
]

objArr.forEach((item)=>{
//   console.log(item.language)
})

// drawback of forEach , it will not return back

let Element1 = arr.forEach((nums) => {
       return nums
})

// console.log(Element1)// it will return undefined

// to soleve this problem we use the filter

 Element1 = arr.filter((nums) => {
     
    return nums < 5
})// callBack with condition

// console.log(Element1) // will contain array

// chain rule

let chain = arr.map((nums)=> nums*10)
               .map((nums)=> nums*10)
               .filter((nums)=> nums>200)

// console.log(chain)// it will return the [300,400,500]

// reduce method

chain = arr.reduce((acc,item) => acc+item,0)// take three arguments (accumalator,itema and initial value)
console.log(chain)
