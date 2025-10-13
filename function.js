function sayMyName(){// way to define the function
     console.log("chansa bavji")
}

sayMyName()// way to call the function 

function addTwoNumber(num1,num2){// this we called the parameter 
    console.log(num1+num2)
}
addTwoNumber(2,5)// this we called the argument 

function addNumber(num1,num2=6){// this we called the parameter ,with default value
    console.log(num1+num2)
}
addNumber(2)// this will take the firat num=2 even the you declare the default value of num1 and not two