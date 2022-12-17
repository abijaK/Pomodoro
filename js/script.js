// Declare variables to point to elements
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startButton = document.getElementById("start");
let breakButton = document.getElementById("break");
let resetButton = document.getElementById("reset");

// Initialization
let initial = {
    startTime: 0,
    breakTime: 4,
    seconds: "00",
}

// Switch on session/break 
let timer;

let decrementSec = 59;

// Display on loading
window.onload = () => {
    min.innerHTML = initial.startTime + 1;
    sec.innerHTML = initial.seconds;
    breakButton.style.display = "none";
}

// Add function that will be called onClick
let start = () => {

    // Display break button and hide start button
    breakButton.style.display = "block";
    startButton.style.display = "none";
    
    // Set minutes to start count down
    let onWorking = initial.startTime;       
    let onBreaking = initial.breakTime - 1;  

    isSwitching = 0;
 
    //Add function count down
    let countDown = () => {
    
    // Display values in DOM once countdown has start
    
    min.innerHTML = onWorking;
    sec.innerHTML = decrementSec;
                                /**
                                * 24:59 
                                */

    // Decrement seconds  
    decrementSec -=1      

        // if seconds get value 0 then decrement minutes (onWorking)
        if (decrementSec === 0) {
            onWorking -= 1;

            if (onWorking === -1) {
                if (isSwitching % 2 === 0) {
                    // Start with breack timer
                    onWorking = initial.breakTime;
                    isSwitching+=1 
                } else{
                    // Continue working
                    onBreaking = initial.startTime; //25
                    isSwitching = 0;
                }
            }
            decrementSec = 59;
        }       
            
    }; 
    // set the interval to execute the function countDown()
    timer = setInterval(countDown, 1000); // 1000ms
}

// Add function to pause timer
const breakSession = () => {
    clearInterval(timer);    
}

// Add function to reset timer
const resetToDefault = () => { 

    clearInterval(timer);
    initial.startTime = 25;
    initial.seconds = "00";

    min.innerHTML = initial.startTime;
    sec.innerHTML = initial.seconds;
    decrementSec = 59;

    breakButton.style.display = "none";
    startButton.style.display = "block";
    
};

// Add event listener to start button :
startButton.addEventListener('click', () => {
    start();
});

// Add event listener to start button :
breakButton.addEventListener('click', () => {
    breakSession();
    startButton.style.display = "block";
    breakButton.style.display = "none";
});

// Add event listener to start button :
resetButton.addEventListener('click', () => {
    resetToDefault();
    initial.startTime = 24;
});
 