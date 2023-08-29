var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var diceImage1 = `images/dice${randomNumber1}.png`;
var diceImage2 = `images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);


if(randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(randomNumber1 < randomNumber2 ){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}




// document.querySelector(".img1").setAttribute("img", );
// document.querySelector(".img").getAttribute;
// document.querySelector(".img1").setAttribute("src", `C:\Users\rambo\Downloads\Coding\Full Stack Web Dev\JavaScript\Dicee Game\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice${randomNumber1}.png`)[2]; 