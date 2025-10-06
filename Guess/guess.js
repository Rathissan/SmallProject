function Guess(int findMe, int maxTry){
    let i=0;
    while (i < maxTry) {
        if (document.getElementById("guess").value == findMe) {
            alert("You win!");
            break;
        } else {
            alert("Try again!");
            break;
        }
        i++;
    }
}
