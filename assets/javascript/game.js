$(document).ready(function () {

    //global variables
    var playerScore = [];
    var winningNum = [];
    var wins = [];
    var losses = [];


    //generate random winning number
    function startGame() {
        winningNum = Math.floor(Math.random() * (121 - 19) + 19);
        $("#winningNum").text(winningNum);


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
            console.log(btn4)
        });
    }

    //check for a win or loss
    function endGame() {
        if (playerScore === winningNum) {
            wins++
            playerScore = 0;
            $("#win").text(wins);
            $("#score").text(playerScore);
            startGame();
        }
        else if (playerScore > winningNum) {
            losses++
            playerScore = 0;
            $("#loss").text(losses);
            $("#score").text(playerScore);
            startGame();
        }
    }
    startGame()

    //game reset

    //update wins and losses

});