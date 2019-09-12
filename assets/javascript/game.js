$(document).ready(function () {

    //global variables
    var playerScore = [];
    var winningNum = [];
    var wins = [];
    var losses = [];

    var btn1 = 0;
    var btn2 = 0;
    var btn3 = 0;
    var btn4 = 0;

    //generate random winning number & generate round specific button values
    function startGame() {
        winningNum = Math.floor(Math.random() * (121 - 19) + 19);
        $("#winningNum").text(winningNum);

        btn1 = Math.floor(Math.random() * (12 - 1) + 1);
        btn2 = Math.floor(Math.random() * (12 - 1) + 1);
        btn3 = Math.floor(Math.random() * (12 - 1) + 1);
        btn4 = Math.floor(Math.random() * (12 - 1) + 1);
    }

    //button onclick events & score counter
    $("#btn1").on("click", function () {
        playerScore = parseInt(playerScore + btn1);
        $("#score").text(playerScore);
        endGame();
    });

    $("#btn2").on("click", function () {
        playerScore = parseInt(playerScore + btn2);
        $("#score").text(playerScore);
        endGame();
    });

    $("#btn3").on("click", function () {
        playerScore = parseInt(playerScore + btn3);
        $("#score").text(playerScore);
        endGame();
    });

    $("#btn4").on("click", function () {
        playerScore = parseInt(playerScore + btn4);
        $("#score").text(playerScore);
        endGame();
    });

    //check for a win or loss
    function endGame() {
        if (playerScore === winningNum) {
            wins++
            playerScore = 0;
            $("#win").text(wins);
            $("#score").text(playerScore);
            $("#alert").html("YOU WIN!");
            startGame();
        }
        else if (playerScore > winningNum) {
            losses++
            playerScore = 0;
            $("#loss").text(losses);
            $("#score").text(playerScore);
            $("#alert").html("YOU LOSE!");
            startGame();
        }
    }
    startGame()
});