let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg  = document.querySelector("#msg")
let turnO = true;
const winPatterns = [
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
] ;
// let event1 = ()=> {
//     console.log("box was clicked")
//     if(turn0) {
//         box.innertext ="O";
//         turn0 = false;
//     }
//         else {
//             box.innertext = "X"
//             turn0 = true
//         }
//     }
// boxes.forEach((box) => {
//     box.addEventListener("click", ()=> {
//         console.log("box was clicked")
//         if(turn0) {
//             box.innertext ="O";
//             turn0 = false;
//         }
//             else {
//                 box.innertext = "X"
//                 turn0 = true
//             }
//         })

// })
const resetGame =() => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("box was clicked");
      if (turnO) {
        box.innerText = "O";
        box.style.color = "blue";
        turnO = false;

      } else {
        box.innerText = "X";
        box.style.color = "red";
        turnO = true;
      }
      box.disabled = true
      checkWinner();
        });
  });
  const disableBoxes = () => {
    for(let box of boxes){
      box.disabled = true;
    }
    }
    const enableBoxes = () => {
      for(let box of boxes){
        box.disabled = false;
        box.innerText  = "";
      }
      }
  const showWinner = (winner)=> {
    msg.innerText = `congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide")
  }

 const checkWinner =() => {
    for(let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val =boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      if (pos1Val != "" && pos2Val !="" && pos3Val!="") {
        if (pos1Val === pos2Val && pos2Val===pos3Val){
          console.log("winnner",pos1Val)
          showWinner(pos1Val);
          disableBoxes();
        }
      }
          
    } 
 }  

 
newGameBtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
