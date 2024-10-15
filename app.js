let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const drawGame=()=>{
    //console.log("Game is draw!");
    msg.innerText="Game is drawn.Play again.";
    msg.style.backgroundColor="#081b31";
    //const userscorepara=document.querySelector("#user-score");
    //const compscorepara=document.querySelector("#comp-score");


}
const showwinner=(userwin,choiceid,compchoice)=>{
    const userscorepara=document.querySelector("#user-score");
    const compscorepara=document.querySelector("#comp-score");
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        //console.log("You win!");
        msg.innerText=`You win! Your ${choiceid} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
       
        msg.innerText=`You lose! ${compchoice} beats your${choiceid}`;
        //console.log("you lose!");
        msg.style.backgroundColor="red";
    }
}
const gencompchoice=()=>{
    const options=["rock","scissor","paper"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];

}
const playGame=(choiceid)=>{
    console.log("user choice=",choiceid);
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);
    if(choiceid===compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(choiceid==="rock"){
            userwin=compchoice==="paper"?false : true;
        }
        else if(choiceid==="paper"){
            userwin=compchoice==="scissor"?false:true ;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,choiceid,compchoice);
    }
}
choices.forEach((choice)=>{
   // console.log(choice);
choice.addEventListener("click",()=>{
    const choiceid=choice.getAttribute("id")
    playGame(choiceid);
})
})
