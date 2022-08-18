function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"]
    let choice= choices[Math.floor(Math.random()*choices.length)]
    console.log(choice)
    result.textContent=choice;
    return choice;
}

function stop(){
    buttons.forEach(button=>button.removeEventListener("click",round));
}

function round(e){ 
        let playerChoice=e.path[0].innerText
        playerPick.textContent=playerChoice
        console.log(playerChoice)
        let computerChoice=getComputerChoice();
        vs.textContent="VS"
        if((playerChoice=="Rock"&&computerChoice=="Scissors")||(playerChoice=="Scissors"&&computerChoice=="Paper")||(playerChoice=="Paper"&&computerChoice=="Rock")){
            wins+=1
            win.textContent=`Wins: ${wins}`
        }else if((playerChoice==="Rock"&&computerChoice==="Paper")||(playerChoice=="Scissors"&&computerChoice=="Rock")||(playerChoice=="Paper"&&computerChoice=="Scissors")){
            losses+=1
            loss.textContent=`Losses: ${losses}`
        }else if((playerChoice==="Rock"&&computerChoice==="Rock")||(playerChoice=="Scissors"&&computerChoice=="Scissors")||(playerChoice=="Paper"&&computerChoice=="Paper")){
            draws+=1
            draw.textContent=`Draws: ${draws}`
        }
        rounds+=1
        counter.textContent=`Round ${rounds}`
        if(rounds==5){
            stop()
            if(wins>losses){
                final.textContent="You won"
                end.textContent="Reload page to play again"
            }else if(wins<losses){
                final.textContent="You lost"
                end.textContent="Reload page to play again"
            }else{
                final.textContent=" It's a draw"
                end.textContent="Reload page to play again"
            }
        }
        console.log(rounds)
}

const result=document.querySelector(".choice");
const computer=document.querySelector(".computer");
const buttons=document.querySelectorAll("button");
const win=document.querySelector("#sp1");
const loss=document.querySelector("#sp2");
const draw=document.querySelector("#sp3")
const rock=document.querySelector("#bt1")
const counter=document.querySelector(".counter");
const final=document.querySelector(".final");
const playerPick=document.querySelector(".playerPick");
const end=document.querySelector(".end");
const vs=document.querySelector(".vs");
let rounds=0;
let wins=0;
let losses=0;
let draws=0;
buttons.forEach(button=>button.addEventListener("click",round));