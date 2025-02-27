let userscore = 0;
let Aiscore = 0;

const user = document.querySelector("#userscore")
const AI = document.querySelector("#compscore")
// console.log(user,AI)
const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg")
const reset = document.querySelector(".reset");

const generateAiChoise = () =>
{
    const options= ["rock","paper","scissors"];
    const a = Math.floor(Math.random()*3);
    return options[a];
    // console.log(a)
};

const drawGame = (user_choise,Aichoise) =>
{
    console.log("Draw")
    msg.innerText = `Draw => user : ${user_choise} and AI : ${Aichoise}`
    msg.style.backgroundColor = "white";

};

const showWin = (user_win,user_choise,Aichoise) =>
{
    if(user_win == true)
    {
        console.log("User win ");
        userscore++;
        // userscore = userscore+1;
        user.innerText = userscore;
        msg.innerText = `You Win => user : ${user_choise} and AI : ${Aichoise}`  
        msg.style.backgroundColor = "green";
    }
    else
    {
        console.log("Ai win");
        Aiscore++;
        // Aiscore = Aiscore+1;
        AI.innerText =  Aiscore;
        msg.innerText = `You lose => user : ${user_choise} and AI : ${Aichoise}`
        msg.style.backgroundColor = "red";
    }

};
    
const playgame = (user_choise,) =>
{
    console.log(user_choise);
    const Aichoise = generateAiChoise();
    console.log(Aichoise);

    if(user_choise == Aichoise)
    {
        drawGame(user_choise,Aichoise);
    }
    else 
    {
        let user_win = true;
        if(user_choise == "rock")
        {
            // Ai = paper or Scissor 
            user_win = Aichoise == "paper"  ? false : true; 
        }
        if(user_choise == "paper")
        {
            // rock or scissor
            user_win = Aichoise == "rock" ? true : false; 
        }
        else
        {
            // User : Scissor
            // AI : rock , scissor
            user_win = Aichoise == "rock" ? false : true;
        }
        showWin(user_win,user_choise,Aichoise);
    }
};

choises.forEach((choise) => 
{
    choise.addEventListener("click",() =>
    {

        const user_choise =  choise.getAttribute("id");
        // console.log("done",user_choise);
        playgame(user_choise);
      
    })
});

reset.addEventListener("click",() =>
{


    userscore = 0;
    Aiscore = 0;
    user.innerText = userscore;
    AI.innerText = Aiscore;
    msg.innerText = "Click img to Play";
    msg.style.backgroundColor = "gray"; // Reset to default color
});



    