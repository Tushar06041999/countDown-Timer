

let dest=new Date("sep 10,2021,10:00:00").getTime();
let dest1=new Date("sep 10,2025,10:00:00").getTime();

let countDown=setInterval(() => {


    

let now=new Date().getTime();
let diff=now - dest;

let days=Math.floor(diff / (1000*60*60*24));
let hours=Math.floor((diff % (1000*60*60*24))/(1000*60*60));
let min=Math.floor((diff % (1000*60*60))/(1000*60));
let sec=Math.floor((diff % (1000*60))/(1000));

if(dest===dest1){
    document.getElementById("blank").innerHTML=days +"Day "+ hours +"Hour "+min+"Min "+sec +"sec";
}
else{
    document.getElementById("blank").innerHTML="Time Is Over";
}



}, 1000);
// console.log(diff);
// console.log(days);
// console.log(hours);
// console.log(min);
// console.log(sec);
// console.log(countDown);