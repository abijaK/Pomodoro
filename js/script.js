// Variables
let progressBar = document.querySelector(".progress");

let min = document.getElementById("min");
let sec = document.getElementById("sec");

let startID = document.getElementById("start");
let breakID = document.getElementById("break");
let resetID = document.getElementById("reset");

// Initialization
const initial = {
    startTime: 25,
    breakTime: 5,
    seconds: "00",
}
let timeContainer;


// Display on loading
window.onload = () => {
    min.innerHTML = initial.startTime;
    sec.innerHTML = initial.seconds;
    breakID.style.display = "none";
}

// Start timer
let start = () => {
    breakID.style.display = "block";
    startID.style.display = "none";
    initial.seconds = 59;
    
    let onWorking = initial.startTime - 1;       // 24  
    let onBreaking = initial.breakTime - 1;      // 4   
    
    breakCounter = 0;

    // count down
    let beginCountDown = () => {
        // Display values in DOM once countdown starts
        min.innerHTML = onWorking;
        sec.innerHTML = initial.seconds;    /**
                                        * 24:59 
                                        */

        // Start with seconds - 1
        initial.seconds -= 1;          

        if (initial.seconds === 0) {
            onWorking -= 1;

            if (onWorking === -1) {
                if (breakCounter % 2 === 0) {
                    // Starts with breack timer
                    onWorking = initial.breakTime;
                    breakCounter+=1 
                } else{
                    // Continue working
                    onBreaking = initial.startTime; //25
                    breakCounter+=1
                }
            }
            initial.seconds = 59;
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
});

// Add event listener to start button :
resetID.addEventListener('click', () => {
    resetToDefault();
});