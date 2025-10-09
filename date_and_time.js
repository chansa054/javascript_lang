// dates

const mydate = new Date()
// console.log(mydate.toString())// this will show the weekday months and date

let myCreatedDate= new Date(2025,4,23)// this will print the specific day on that day
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.getDay())// get the specific day only and you can know many other information also


let myTimeStamp = Date.now()
console.log(myTimeStamp)// time in millisecond from the 1970 1 jan to now 
