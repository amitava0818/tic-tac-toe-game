const password = "12345678";
const userPassword = prompt("Enter password:");
  if (userPassword !== password) {
    document.body.innerHTML = "Access Denied";
    throw new Error("Unauthorized");
  }
  else{
    document.getElementById("black").style.width = "0px"
  }

console.log("Welcome to Tic Tac Toe");
let theme = "light"

let gameOver = false 

let turn = "X"

let musicClick = new Audio("bubbleClickSound.mp3")

let musicGameOver = new Audio("balleBalleShinChanSound.mp3")


// Function to cahnge Turn

const changeTurn = ()=>{
    return turn === "X" ? "O" : "X"
}

// Function to checkWin

const checkWin = () => {
    let boxes = document.getElementsByClassName("box")
    let winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    winPatterns.forEach(e=>{
        if(boxes[e[0]].innerText===boxes[e[1]].innerText && boxes[e[1]].innerText ===boxes[e[2]].innerText && boxes[e[0]].innerText !== ""){
            gameOver = true
            document.querySelector(".turn").innerText = boxes[e[0]].innerText + " Won"
            document.getElementById("shinChanImage").style.width = "120px"
            musicGameOver.play()
        }
    })
}

//Game Logic


let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(e=>{
    e.addEventListener('click',()=>{
        if(e.innerText === ''){
            e.innerText = turn
            turn = changeTurn()
            checkWin()
            musicClick.play()
            if(gameOver == false){
            document.querySelector(".turn").innerText = "Turn for " + turn 
            }
        }
    })
})


const resetButton = document.querySelector(".reset")

resetButton.addEventListener('click',()=>{
    Array.from(boxes).forEach(e=>{
        e.innerText = ""
        turn = "X"
        document.querySelector(".turn").innerText = "Turn for " + turn
        document.getElementById("shinChanImage").style.width = "0px"
        musicGameOver.pause()
        musicGameOver.currentTime = 0
    })
})

const themeButton = document.getElementById("themeChanger")

themeButton.addEventListener('click',()=>{
    if(theme === "light"){
    theme = "dark"
    document.body.style.backgroundColor = "#212121"
    document.body.style.color = "#fff"
    document.querySelector(".reset").style.color = "#fff"
    document.querySelector(".reset").style.backgroundColor = "purple"
    Array.from(document.getElementsByClassName("box")).forEach(e=>{
        e.style.borderColor = "#fff"
    })
    }
    else{
    theme = "light"
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#000000"
    document.querySelector(".reset").style.color = "#000000"
    document.querySelector(".reset").style.backgroundColor = "rgb(242, 204, 242)"
        Array.from(document.getElementsByClassName("box")).forEach(e=>{
        e.style.borderColor = "#000000"
    })
    }
    
})