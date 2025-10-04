let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let i = 0;
while (i < 3) {
    if (document.getElementById("guess").value == randomNumber) {
        alert("You win!");
        break;
    } else {
        alert("Try again!");
        break;
    }
    i++;
}