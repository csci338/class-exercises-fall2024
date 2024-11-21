export function helloWorld() {
    return "Hello world!";
}

/*
Implement the following logic and return the corresponding message (exactly as it is shown below):
* If one hand is rock and the other is paper, return the string "Paper wins!"
* If one hand is paper and the other is scissors, return the string "Scissors wins!"
* If one hand is scissors and the other is rock, return the string "Rock wins!"
* If both hands are the same (and have valid arguments), return "Tie!"
* If anything other than rock, paper, or scissors are passed in, return "Invalid"
*/
export function rps(hand1, hand2) {
    // Check if both hands are valid inputs
    const validHands = ["rock", "paper", "scissors"];
    if (!validHands.includes(hand1) || !validHands.includes(hand2)) {
        return "Invalid";
    }

    // Check for a tie
    if (hand1 === hand2) {
        return "Tie!";
    }

    // Determine the winner based on the rules
    if (
        (hand1 === "rock" && hand2 === "paper") ||
        (hand1 === "paper" && hand2 === "rock")
    ) {
        return "Paper wins!";
    } else if (
        (hand1 === "paper" && hand2 === "scissors") ||
        (hand1 === "scissors" && hand2 === "paper")
    ) {
        return "Scissors wins!";
    } else if (
        (hand1 === "scissors" && hand2 === "rock") ||
        (hand1 === "rock" && hand2 === "scissors")
    ) {
        return "Rock wins!";
    }

    return "Invalid";
}
