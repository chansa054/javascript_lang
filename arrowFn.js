const Fn1 =function (){
    console.log("That is what we want")
}

const Fn2=()=>{// this is same as above and we called this arrow function 
    console.log("this is arrow function")
}

// impliciet return in aarow function 

const imp = (num1,num2)=>(num1+num2)// it will automatically understand that it has to return this

//++++++++++++++++++++++++++ this ++++++++++++++++++++++++++++++++++++

const Obj={
  name:"banna",
  id:234,
  Myname: ()=>{
    console.log(`this is what Im saying ${this.name}`)
  } 
}// here 'this' is reffering the current object 

console.log(this)//here this is empty object 




