function getComputerChoice(){
    const choices=["rock","paper","scissors"]
    let choice= choices[Math.floor(Math.random()*choices.length)]
    console.log(choice)
    result.textContent=choice;
    return choice;
}
function round(e){ 
        let playerChoice=e.path[0].innerText
        console.log(playerChoice)
        let computerChoice=getComputerChoice();
        if((playerChoice=="Rock"&&computerChoice=="scissors")||(playerChoice=="Scissors"&&computerChoice=="paper")||(playerChoice=="Paper"&&computerChoice=="rock")){
            return "You win"
            x+=1
        }else if((playerChoice==="Rock"&&computerChoice==="paper")||(playerChoice=="Scissors"&&computerChoice=="rock")||(playerChoice=="Paper"&&computerChoice=="scissors")){
            return "You lose"
        }else if((playerChoice==="Rock"&&computerChoice==="rock")||(playerChoice=="Scissors"&&computerChoice=="scissors")||(playerChoice=="Paper"&&computerChoice=="paper")){
            return "Draw"

        }
    
    
}

const result=document.querySelector(".choice");
const computer=document.querySelector(".computer");
const buttons=document.querySelectorAll("button");
const win=document.querySelector("#sp1");
const loss=document.querySelector("#sp2");
const rock=document.querySelector("#bt1")
x=1
function play(){
    rock.addEventListener("click",round);
    x+=1;
    if(x==2){
        rock.removeEventListener("click",round)
    }

    
}
play()





/*for(i=1;i<=3;i++){   
}
buttons.forEach(button=>button.addEventListener("click",round,{
    once:true
}));*/