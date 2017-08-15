// Rock Paper Scissors practice problem

//ask for the user choice
var userChoice = prompt("Do you choose rock, paper or scissors?");

//generate a random computer choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

// Compare both choices
function compare (choice1, choice2) {
    //validate user choice
   if (choice1 != "rock" || "paper" || "scissors") {
       return "Oops! Please choose from rock, paper, or scissors";
       // check if its a tie
        if (choice1 === choice2) {
            return "The result is a tie";
            }
        // logic for compared choice scenarios
        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins";
                }
            else {
                return "paper wins";
                }
            }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
                }
            else {
                return "scissors wins";
                }
            }
        else {
            if (choice2 === "paper") {
                return "scissors wins";
                }
            else {
                return "rock wins";
                }
            }
   }
}
// log user & computer choices
console.log("User: " + userChoice);
console.log("Computer: " + computerChoice);

// send user & computer choices to the compare function
compare(userChoice, computerChoice);