let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() =>{
    //rock, paper ,scissors
      const options = ["rock", "paper", "scissors"];
      const ranIdx = Math.floor(Math.random() * 3); //for generating a whole number for random index for choicel b/w 0 to 2
      return options[ranIdx];
   }

const drawGame = ()=>{
    msg.innerText = "Game was draw.. play again!";
    msg.style.backgroundColor ="grey";
   };

    
const showWinner = (userWin, userChoice, compChoice)=>
{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
      
        msg.innerText =`HURRAY! You won ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
      
         msg.innerText =`OOPS! You lost ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) => {
   
   //generate computer choice is called modular way of programming mtlb tukde bn ja
   const compChoice = genCompChoice();
  
   if(userChoice === compChoice){
   //draw game
   drawGame();
   }else{
    let userWin = true;
    
    if(userChoice === "rock"){
        //choice reh gyi paper ya scissors
        userWin = compChoice ==="paper" ? false : true;
    }
    else if(userChoice === "paper"){
        //choice reh gyi let userScore =0;
        userWin = compChoice === "scissors" ? false : true;
        }
    else if(userChoice === "scissors"){
        //choice reh gyi rock ya paper
        userWin = compChoice ==="rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
};

choices.forEach((choice)=>{
  choice.addEventListener("click" , ()=>
{
    const userChoice = choice.getAttribute("id");
playGame(userChoice);
//yahan pr play game ko pta hogi user ki choice
   });
});