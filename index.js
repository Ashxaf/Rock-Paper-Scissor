let userScore=0
let compScore=0
let ds=0
let Userpoint=document.querySelector('.your-score p')
let compPoint=document.querySelector('.user-score p')
let drawScore=document.querySelector('.draw-score p')

let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('.message');

const compChoice=()=>{
    arr=['rock','paper','scissor'];
   return arr[Math.floor(Math.random()*3)]
}

const play=(userChoice)=>{
    const comp=compChoice()
    console.log(userChoice);
    console.log(comp)
    
    if (comp===userChoice){
        
        msg.innerText=`Match Draw, Try Again`
        ds++;
        msg.style.color='white'
        drawScore.innerText=`${ds}`

    }else if(userChoice=='rock'){
        // paper , scissor
        if(comp=='paper'){
            console.log("You win")
            userScore=userScore+1
            Userpoint.innerText=`${userScore}`
            msg.innerText=`You Won! Your ${userChoice} beats ${comp}`
            msg.style.color='green'
        }else{
            console.log("You lose")
            compScore++;
            compPoint.innerText=`${compScore}`
            msg.innerText=`You Lose! Your ${userChoice} got defeated by ${comp}`
            msg.style.color='red'

        }
    }else if(userChoice=='paper'){
        //rock,scissor
        if(comp=='rock'){
            console.log("You win")
            userScore=userScore+1
            Userpoint.innerText=`${userScore}`
            msg.innerText=`You Won! Your ${userChoice} beats ${comp}`
            msg.style.color='green'
        }else{
            console.log("You lose");
            compScore++;
            compPoint.innerText=`${compScore}`
            msg.innerText=`You Lose! Your ${userChoice} got defeated by ${comp}`
            msg.style.color='red'
        }

    }else{
        if(comp=='paper'){
            console.log("You win");
            userScore=userScore+1
            Userpoint.innerText=`${userScore}`
            msg.innerText=`You Won! Your ${userChoice} beats ${comp}`
            msg.style.color='green'
        }else{
            console.log("You Lose")
            compScore++;
            compPoint.innerText=`${compScore}`
            msg.innerText=`You Lose! Your ${userChoice} got defeated by ${comp}`
            msg.style.color='red'
        }
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute('id');
        play(userChoice)
    })
   
})






