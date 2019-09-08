$(document).ready(function () {

    //global variables
    var playerScore = [];
    var winningNum = [];
    var wins = [];
    var losses = [];


    //generate random winning number
    function getRandomArbitrary(min, max) {
        winningNum = Math.floor(Math.random() * (121 - 19) + 19);
        $("#winningNum").text(winningNum);
    }
    getRandomArbitrary()

    //generate round specific button values
    var btn1 = Math.floor(Math.random() * (12 - 1) + 1);
    var btn2 = Math.floor(Math.random() * (12 - 1) + 1);
    var btn3 = Math.floor(Math.random() * (12 - 1) + 1);
    var btn4 = Math.floor(Math.random() * (12 - 1) + 1);

    console.log(btn1, btn2, btn3, btn4)

    //button onclick events & score counter
    $("#btn1").on("click", function () {
        playerScore = parseInt(playerScore + btn1);
        $("#score").text(playerScore);
    });

    $("#btn2").on("click", function () {
        playerScore = parseInt(playerScore + btn2);
        $("#score").text(playerScore);
    });

    $("#btn3").on("click", function () {
        playerScore = parseInt(playerScore + btn3);
        $("#score").text(playerScore);
    });

    $("#btn4").on("click", function () {
        playerScore = parseInt(playerScore + btn4);
        $("#score").text(playerScore);
    });

    //check for a win or loss
    function endGame() {
        if (playerScore === winningNum) {
            wins++
           // reset()
            $("#win").text(wins);
        }
        else {
            losses++
           // reset()
            $("#loss").text(losses);
        }
    }
    endGame()

    //game reset

    //update wins and losses

});