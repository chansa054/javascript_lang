function sayMyName(){// way to define the function
     console.log("chansa bavji")
}

// sayMyName()// way to call the function 

function addTwoNumber(num1,num2){// this we called the parameter 
    console.log(num1+num2)
}
// addTwoNumber(2,5)// this we called the argument 

function addNumber(num1,num2=6){// this we called the parameter ,with default value
    console.log(num1+num2)
}
// addNumber(2)// this will take the firat num=2 even the you declare the default value of num1 and not two

function calculateCartPrice(...num1){

 console.log(num1)
}

// calculateCartPrice(54,67,89)// we can pass many argument with this 

//passing object to function 

let user={
    name:'panda',
    id : 100
}

function PassObject(anyObj){
    console.log(anyObj.name)
    console.log(anyObj.id)
}
// PassObject(user)

PassObject({name:'chansa',id:101})// defining the object into the function

function passArray(getArray){
    console.log(getArray[1])
}

// passArray([100,200,500,300])// defining the array into the function 



const addTwo =function(num2){
   return num2+2
}

console.log(addTwo(5))