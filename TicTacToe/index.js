let boxes = document.getElementsByClassName("box");
let turn = "x";
let won = false;

const changeTurn = () => {
  return turn === "x" ? "0" : "x";
};
const Winner = () => {
  let text = document.getElementsByClassName("boxtext");
  winset = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
            ];
  winset.forEach((element) => {
    if (text[element[0]].textContent === text[element[1]].textContent &&
      text[element[0]].textContent === text[element[2]].textContent &&
      text[element[0]].textContent !== "")
       { document.querySelector(".win").innerText = "Winner is :" + text[element[0]].textContent;
         document.querySelector(".bigBox").classList.add("dontmove")
         won=true;
       }
       
       
                            });
                };

Array.from(boxes).forEach((eachbox) => {
  let text = eachbox.querySelector(".boxtext");
  eachbox.addEventListener("click", () => {
    if (eachbox.innerText === "") {
      text.textContent = turn;
      turn = changeTurn();
      Winner();
     if(won!==true)
     {
        document.querySelector(".win").innerText = "Winner is : NoOne"
     }
      
      
      

      document.querySelector(".turn").textContent = "Turn of : " + turn;
      
    }
  });
});

const resetBtn = document.querySelector(".reset");

      resetBtn.onclick = () => {
        Array.from(boxes).forEach((eachbox) => {
            let text = eachbox.querySelector(".boxtext");
            text.textContent = "";
        })
        document.querySelector(".turn").textContent = "Turn of : ";
        document.querySelector(".win").innerText = "Winner is :" 
        turn='x';
        document.querySelector(".bigBox").classList.remove("dontmove")
      };