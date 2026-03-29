let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turn0 = true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]; 

const resetgame = () =>{
    turn0 = true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
     if(turn0){
        box.innerText="O";
        box.classList.add("X");
        box.classList.remove("O");
        turn0=false;
     }
     else{
         box.innerText="X";
         box.classList.add("O");
        box.classList.remove("X");
        turn0=true;
     }
     box.disabled=true;
     count++;

     checkwinner();
    });
});
 
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = ()=>{
     let isWinner = false;
    for(let pattern of winpatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;  
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            showwinner(pos1val);
            isWinner = true;
            break;
        }
    }
    }
     if (!isWinner && count === 9) {
        msg.innerText = "Game Draw! Try Again 🤝";
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);