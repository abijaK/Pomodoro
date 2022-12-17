// Variables 
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startID = document.getElementById("start");
let breakID = document.getElementById("break");
let resetID = document.getElementById("reset");

// Initialization
let initial = {
    startTime: 24,
    breakTime: 4,
    seconds: "00",
}
let timeContainer;
let decrementSec = 59 
// initial.seconds = 59;

// Display on loading
window.onload = () => {
    min.innerHTML = initial.startTime + 1;
    sec.innerHTML = initial.seconds;
    breakID.style.display = "none";
}

// Start timer
let start = () => {

    breakID.style.display = "block";
    startID.style.display = "none";
    
    // Set minutes to start count down
    let onWorking = initial.startTime - 1;       // 24  
    let onBreaking = initial.breakTime - 1;      // 4   

    breakCounter = 0;
 
    //Add function count down
    let beginCountDown = () => {

        // Display values in DOM once countdown has start
        min.innerHTML = onWorking;
        // sec.innerHTML = initial.seconds;   
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
                if (breakCounter % 2 === 0) {
                    // Start with breack timer
                    onWorking = initial.breakTime;
                    breakCounter+=1 
                } else{
                    // Continue working
                    onBreaking = initial.startTime; //25
                    breakCounter = 0;
                }
            }
            decrementSec = 59;
        }       
    }; 
    // set the interval to execute the function beginCountDown()
    timeContainer = setInterval(beginCountDown, 1000); // 1000ms
}

// Add function to pause timer
const breakSession = () => {
    clearInterval(timeContainer);    
}

// Add function to reset timer
const resetToDefault = () => { 

    clearInterval(timeContainer);
    initial.startTime = 25;
    initial.seconds = "00";

    min.innerHTML = initial.startTime;
    sec.innerHTML = initial.seconds;

    breakID.style.display = "none";
    startID.style.display = "block";
    // breack;
};

// Add event listener to start button :
startID.addEventListener('click', () => {
    start();
});

// Add event listener to start button :
breakID.addEventListener('click', () => {
    breakSession();
    startID.style.display = "block";
    breakID.style.display = "none";
});

// Add event listener to start button :
resetID.addEventListener('click', () => {
    resetToDefault();
});
 