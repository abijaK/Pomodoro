// Variables
let progressBar = document.querySelector(".progress");

let min = document.getElementById("min");
let sec = document.getElementById("sec");

// let start = document.querySelector(".start");
let reset = document.getElementById("reset");

// Initialization
let startTime = 25;
let breakTime = 5;

let seconds = "00";
let timeContainer;

// Display on page loading
window.onload = () => {
    min.innerHTML = startTime;
    sec.innerHTML = seconds;
}

// Start timer
let start = () => {
    
    seconds = 59;
    
    let onWorking = startTime - 1;       // 24    decreaseMinutesOnWorking
    let onBreaking = breakTime - 1;      // 4     decreaseMinutesOnBreaking
    
    breakCounter = 0;

    // count down
    let beginCountDown = () => {
        // Display values in DOM once countdown starts
        min.innerHTML = onWorking;
        sec.innerHTML = seconds;    /**
                                        * 24:59 
                                        */

        // Start with seconds - 1
        seconds = seconds - 1;          // 58

        if (seconds === 0) {
            onWorking = onWorking - 1;

            if (onWorking === -1) {
                if (onBreaking % 2 === 0) {
                    // Starts with breack timer
                    onWorking = breakTime;
                    breakCounter++ 
                } else{
                    // Continue working
                    onBreaking = startTime;
                    breakCounter++
                }
            }
            seconds = 59;
        }
        
    }
    
    timeContainer = setInterval(beginCountDown, 1000); // 1000ms
}

function resetToDefault(){  
    clearInterval(timeContainer);
    startTime = 25;
    seconds = "00";

    min.innerHTML = startTime;
    sec.innerHTML = breakTime;
};