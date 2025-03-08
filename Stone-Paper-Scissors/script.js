let userScore=0;
let compScore =0;

let userWin = true;

let choices = document.querySelectorAll(".choice");

let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#computer-score");

let msg = document.querySelector(".msg");

let restart= document.querySelector(".restart");
restart.addEventListener("click", () =>{
    userScore =0;
    compScore =0;
    msg.innerText= "Play your move";
    msg.style.backgroundColor= "black";
})
let genCompChoice = ()=>{
    const option = ["rock","paper","scissor"];
    let randIndex= Math.floor(Math.random(option)*3);
    return option[randIndex];
}
let drawGame = () =>{
    console.log("Its a draw");
    msg.innerText= "It's a Draw !"
    msg.style.backgroundColor= "black";

}
let showWinner = (win,userChoice,compChoice) =>{
    if (win){
        console.log("user win");
        msg.innerText= `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
        userScore++;
    }
    else{
        console.log("comp win");
        msg.innerText= `You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
        compScore++;
    }
    uScore.innerText= userScore;
    cScore.innerText= compScore;
}
let playGame = (userChoice)=>{
    let compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        if(userChoice === "rock"){
        // paper scissor
        if (compChoice === "paper"){
            userWin= false;
        }
        else {
            userWin = true;
        }
    }
    else if (userChoice === "paper"){
        // rock scissor
        if(compChoice=== "rock"){
            userWin = true;
        }
        else{
            userWin= false;
        }
    }
    else if (userChoice === "scissor"){
        // rock paper 
        if(compChoice === "rock"){
            userWin= false;
        }
        else{
            userWin= true;
        }
    }
    showWinner(userWin,userChoice,compChoice);

}
}
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
         playGame(userChoice);
     

    })
})