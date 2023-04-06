console.log("Welcome To TicTacToe")
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.wav");
let turn = "x"

const changeTurn =()=>{
    return turn === "x"?"0" : "x"
}

// function to check win

const checkWin = ()=>{

}

// PLaying game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let textbox = document.querySelector('.boxtext');
    textbox.addEventListener('click',()=>{
        if(e.innerText === ''){
            e.innerText = turn;
            changeTurn()
            audioTurn.play();
            checkWin();
            document.getElementsByClassName(turn)[0].innerText = "Turn for" + turn;
        }
    })
})