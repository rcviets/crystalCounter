$(document).ready(function () {

    //generate random winning number
    var winningNum = [];

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
    //button onclick events
    $(".col-md-3").on("click", function () {

        console.log("click")
    });

    //update the score counter

    //check for a win (if score and winning number match)

    //check for a loss (if score is greater than winning number)

    //game reset

    //update wins and losses

});