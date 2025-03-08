var randomNumber1 = Math.random();
randomNumber1*=6;
randomNumber1= Math.floor(randomNumber1)+1;
var dice1image = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.random();
randomNumber2*=6;
randomNumber2= Math.floor(randomNumber2)+1;
var dice2image = "images/dice"+randomNumber2+".png";


document.querySelector(".box1").setAttribute("src",dice1image);
document.querySelector(".box2").setAttribute("src",dice2image);

if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins  🚩";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw";
}