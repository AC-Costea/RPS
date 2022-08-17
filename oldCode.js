function getPlayerChoice(){
    let imp=prompt("Pick rock,paper or scissors:","")
    if(imp===null){ 
        user=imp
        return user
    }else{
        let input=imp.toLowerCase()
        let user=input.trim()
        console.log(user)
        return user
    }
    
    }
    
    function getComputerChoice(){
        const choices=["rock","paper","scissors"]
        let choice= choices[Math.floor(Math.random()*choices.length)]
        console.log(choice)
        return choice
    }
    
    function round(){ 
        let playerChoice=getPlayerChoice();
            let computerChoice=getComputerChoice();
            if((playerChoice=="rock"&&computerChoice=="scissors")||(playerChoice=="scissors"&&computerChoice=="paper")||(playerChoice=="paper"&&computerChoice=="rock")){
                console.log("You win")
            }else if((playerChoice==="rock"&&computerChoice==="paper")||(playerChoice=="scissors"&&computerChoice=="rock")||(playerChoice=="paper"&&computerChoice=="scissors")){
                return "You lose"
            }else if((playerChoice==="rock"&&computerChoice==="rock")||(playerChoice=="scissors"&&computerChoice=="scissors")||(playerChoice=="paper"&&computerChoice=="paper")){
                return "Draw"
    
            }else{
                return "That pick is not available,choose again"
            }
        
        
}

let x=0;
let y=0;

for(i=1;i<=5;i++){
    let result=round();
    console.log(result);
    if(result=="You win"){
        x=x+1;
    }else if(result=="You lose"){
        y=y+1;
    }else if(result=="That pick is not available,choose again"){
        i--
    }else if(result=="cancel"){
        x=null
        y=null
        break
    }
}

if(x>y){
    console.log("You are the winner")
}else if(x<y){
    console.log("You are the loser")
}else if(x=y){
    console.log("It's a draw")
}
for(i=1;i<3;i++){
    let b=buttons.forEach(button=>button.addEventListener("click",round));
    
}

