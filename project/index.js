// function color(clor_code='pink'){
//     document.body.style.backgroundColor=`${clor_code}`
// }


// let class_name=['sqr-1','sqr-2','sqr-3','sqr-4']
// let color_ = ['red','green','yellow','black']
// let sqr= new Array;
// for(let i=0;i<class_name.length;i++){
    
//   sqr[i] = document.querySelector(`.${class_name[i]}`);
//   if(sqr[i]){
//      sqr[i].onclick =() => color(`${color_[i]}`);
//   }
//   else{
//     console.log('not running ');
//   }
 
// }


   


// let cal = () =>{
//    let height = parseFloat(document.querySelector('.height').value);
//    let weight = parseFloat(document.querySelector('.weight').value);

//    let BMI_value = weight/((height*height)/10000);
//    document.querySelector('.ans').innerText = `${BMI_value.toFixed(2)}`
  
// }

// window.onload = () => {
//   document.querySelector('.btn').onclick = () => cal;
// };

// // this is for digital clock
// function updateClock(){
// const now = new Date()
// const minute = now.getMinutes();
// const hour = now.getHours();
// const second = now.getSeconds();
// const digi = document.querySelector(".gadi");
// digi.innerText = `${hour} : ${minute} : ${second}`;
// }
// setInterval(updateClock,1000)
// updateClock();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInt = getRandomInt(1, 100); 

function guess_the_Number(){
let attempt = 10;
while(attempt!=0){
const guess_input = document.querySelector('.guess_input').value;
const previous = document.querySelector('#previous').innerText = `your previous guess is :${guess_input}`
let random_no = getRandomInt(1,100);
if(Number(guess_input) == random_no){
    document.querySelector(".guess_result").innerHTML=`Wow you are the winner`
    attempt=attempt-1;
    return; 
}

else{
  document.querySelector(".guess_result").innerHTML=`guess agin ! attempted left ${attempt}`
   attempt=attempt-1;
}

}
}

const guess_result = document.querySelector('.guess_submit').onclick = ()=> guess_the_Number();


