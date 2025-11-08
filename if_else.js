// falsy value
// false, 0,-0,BigInt 0n,"",null,undefined,NaN

// truthy value
//"0",'false'," ",[],{},function(){}

// Nullish Coalescing Operator (??): null undefined 
// above operator is used for null and undefined it will neglect or you may say it will priotize the other datatype
let val1;
// val1 = 5 ?? 10
val1 = null ?? 15// 15 will be assign
console.log(val1)


