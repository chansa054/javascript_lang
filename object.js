//object litrals 
const sym = Symbol("key1")
const JsUser ={
   name: "chansa",
   age:34,
   [sym]:"myKey1",//declare the symbol
   "full name":"chansa bavji",
   location:"jaipur",
   email: "hitesh@google.com",
   isLoggedIn: false,
   lastLoggedIn: ["Monday","Tuesday","Wednesday"]
}

// console.log(JsUser.name)// simple way to access
// console.log(JsUser["name"])//another way to access
// console.log(JsUser["full name"])//to access the string name you have to use this way
// console.log(JsUser[sym])// this is to access the symbol

JsUser.email="chansa@gtp.com"
// Object.freeze(JsUser)// this will freeze the object any changes in it will not reflect 
JsUser.greeting = function(){//we can define function also undefined is also showing in console which we see later 
    console.log("hello ! we are here")
}

JsUser.greetingtwo= function(){
    console.log(`your name is ${this.name}`)
}

// console.log(JsUser.greetingtwo())

//+++++++++++++++++++++++++++part-2+++++++++++++++++++++++++===
const tinderUser = new Object()// it is a singleton object empty object same as'tinderUser ={}'
const tinderuserTwo={
   id:1,
   fullName:{
    first:"chansa",
    lastName:"bavji",
    address:{
        firstAddress:"pheli gali",
        lastAddress:"aakhari mode"
    }
   },
   salary:25000
}

// console.log(tinderuserTwo.fullName.address.firstAddress)// in this way we can access the object inside object 

// console.log(Object.keys(tinderuserTwo))// it will return the key in array form 
// console.log(Object.values(tinderuserTwo))// it will return the value in array form 
// console.log(Object.entries(tinderuserTwo))// it will return the entries in array form 

//++++++++++++++++++++++++++++++++++Destructuring of object++++++++++++++++++++++++++++++++++++++++++++

const {fullName:name,salary:sal} = tinderuserTwo// we are extracting the key of object 

console.log(name.address.firstAddress)// using directly without calling object  
console.log(sal)



