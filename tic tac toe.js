let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newBtn = document.querySelector('#new-btn');
let msg = document.querySelector('#msg');
let displayMsg = document.querySelector('.msg-container');

let turnO = true; //playerX & playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
// let count = 0;
boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    console.log("Box was clicked!");
    // while(count <= 9){
    // count++;
    // console.log('count');}
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
   });
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulations! winner is ${winner}`;
    displayMsg.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () =>{
    for( let pattern of winPatterns){
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner!");

                showWinner(pos1Val);
            }
        }
    }
};

const resetGame =() =>{
    turnO = true;
    enableBoxes();
    displayMsg.classList.add('hide');
};

newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);

