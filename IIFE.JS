// immediately invoked function expression (IIFE)

// normal function

function chai(){
    console.log(`I an chai`)
}

// we will call the function here 
chai();

//now we see IIFE
(function chaiTwo(){
    console.log(`I am chaiTwo`)
})();   // this is the syntax of IIFE it will call immediatly and two call the two IIFE we need to use semicolon;

// passing the parameter and the arrow function
((name)=>{
  console.log(`I am arrow function ${name}`)
})('Chansa')