// Variables
let progressBar = document.querySelector(".progress");

let min = document.getElementById("min");
let sec = document.getElementById("sec");

let startID = document.getElementById("start");
let breakID = document.getElementById("break");
let resetID = document.getElementById("reset");

// Initialization
let startTime = 25;
let breakTime = 5;

let seconds = "00";
let timeContainer;


// Display on page loading
window.onload = () => {
    min.innerHTML = startTime;
    sec.innerHTML = seconds;
    breakID.style.display = "none";
}

// Start timer
let start = () => {
    breakID.style.display = "block";
    startID.style.display = "none";
    // document.querySelector(".start").style.display = "none";
    // document.querySelector(".break").style.display = "block";
    seconds = 59;
    
    let onWorking = startTime - 1;       // 24  
    let onBreaking = breakTime - 1;      // 4   
    
    breakCounter = 0;

    // count down
    let beginCountDown = () => {
        // Display values in DOM once countdown starts
        min.innerHTML = onWorking;
        sec.innerHTML = seconds;    /**
                                        * 24:59 
                                        */

        // Start with seconds - 1
        seconds -= 1;          

        if (seconds === 0) {
            onWorking -= 1;

            if (onWorking === -1) {
                if (breakCounter % 2 === 0) {
                    // Starts with breack timer
                    onWorking = breakTime;
                    breakCounter+=1 
                } else{
                    // Continue working
                    onBreaking = startTime; //25
                    breakCounter+=1
                }
            }
            seconds = 59;
        }       
    }; timeContainer = setInterval(beginCountDown, 1000); // 1000ms
}

// Add function to pause timer
const breakSession = () => {
    clearInterval(timeContainer);
    // breakID.style.display = "none";
    // startID.style.display = "block";
    
}

// Add function to reset timer
const resetToDefault = () => { 

    clearInterval(timeContainer);
    startTime = 25;
    seconds = "00";

    min.innerHTML = startTime;
    sec.innerHTML = seconds;

    breakID.style.display = "none";
    startID.style.display = "block";
    // breack;
};

// let losingProgressInterval, gainingProgressInterval;

// function drowing() {
//     if(progressBar.value <= 0) {
//         console.log("You have drowned");
//         clearInterval(losingProgressInterval)
//     }else{
//         progressBar.value--;
//     }
// }

// function gainingProgress() {
//     if (progressBar.value == 100) {
        
//     } else {
        
//     }
// }


// Add event listener to start button :
startID.addEventListener('click', () => {
    start();
});

// Add event listener to start button :
breakID.addEventListener('click', () => {
    breakSession();
});

// Add event listener to start button :
resetID.addEventListener('click', () => {
    resetToDefault();
});