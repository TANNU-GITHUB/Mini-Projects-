let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let resetBt = document.querySelector(".reset");
let player0=true, player1;
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
 resetBt= ()=>{
    player0=true;
    enableBoxes();
    
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(player0){
            box.innerText= "O";
            player0 = false;
        }
        else{
            box.innerText="X";
            player0= true;
        }
        box.disabled= true;
        checkWinner();
    })
});

const disableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled= true;
    }
}

const enableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled= false;
    }
}

let checkWinner = ()=>{
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!== "" && pos2!=="" && pos3!==""){
            // console.log("winner");
            // document.getElementsByClassName("msg").innerText="You win";
            if(pos1 === "O" && pos2 ==="O" && pos3 ==="O"){
                msg.innerText="Winner is O";
                disableBoxes();
            }
            else if(pos1 === "X" && pos2 ==="X" && pos3 ==="X"){
                msg.innerText="Winner is X";
                disableBoxes();
            }
            
            
        }
    }
}