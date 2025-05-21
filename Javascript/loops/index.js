// The while loop is simply used repeat your code until a condition is true.
// The do while loop is similar to the while loop, but the difference is that the do while loop will always execute the code block at least once before checking the condition.

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let loggedIn = false;
let username;
let password;

while (!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "vortex" && password === "stargate"){
        loggedIn = true;
        console.log("You're logged in");
    }
    else{
        console.log("You're not logged in");
        
    }
}

// The for loop repeats a code for a limited amount of times as per your requirement.

for (let i = 0; i <=10; i++) {
    
    if (i == 2) {
        continue;          // continue skips the current iteration 
    }
    else{
        console.log(i);
    }
}

for (let i = 0; i <=10; i++) {
    
    if (i == 6) {
        break;            // break stops the loop 
    }
    else{
        console.log(i);
    }
}

// challenge
for (let i = 0; i<1 ; i++) {
    console.log("Vortex12789");
    for (let j = 1; j <1001; j++) {
        console.log("Number: " +j);
        ;
    }
}

// challenge

let name = "Vortex";
let ij = 10;
while (ij <= 110) {
    console.log(name + " " +ij);
    ij++;
}
