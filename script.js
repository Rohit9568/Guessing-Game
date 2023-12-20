
let msg1 = document.getElementById("message1")
let msg2 = document.getElementById("message2")
let msg3 = document.getElementById("message3")
let guess_num = []

let answer = Math.floor(Math.random() * 100) + 1;
let guesses = 0;


function play() {
    let guess = document.getElementById("guess").value;
   
    if(guess<1 || guess>100){
        alert("Please Enter a number Between 1 - 100 !")
    }
    
    else{
        guesses += 1;
        guess_num.push(guess);
        if(guess > answer){
          msg1.textContent = "Your Guess is Too High"
          msg2.textContent = "No of Guesses : " + guesses
          msg3.textContent =  "Guessed Number Are: " + guess_num

        }
        else if(guess < answer){
         msg1.textContent = "Your Guess is Too Low"
         msg2.textContent = "No of Guesses : " + guesses
         msg3.textContent =  "Guessed Number Are: " + guess_num

        }
        else {
            msg1.textContent = "Yaah You Won It!!"
            msg2.textContent = "The number was : " + answer  
            msg3.textContent =  "You guessesd in it  " + guesses + " Guesses"
        }
    }
}
