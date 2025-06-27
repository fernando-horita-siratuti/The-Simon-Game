var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var name;
var level = 0;
var currentLevel = level;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour;

    level++;
    $("h1").text("Level " + level);
    switch(randomNumber){
            case 0:
                randomChosenColour = buttonColours[0];
                playSound("red");
                animatePress("red");
                break;
            case 1:
                randomChosenColour = buttonColours[1];
                playSound("blue");
                animatePress("blue");
                break;
            case 2:
                randomChosenColour = buttonColours[2];
                playSound("green");
                animatePress("green");
                break;
            case 3:
                randomChosenColour = buttonColours[3];
                playSound("yellow");
                animatePress("yellow");
                break;
            default:
                console.log("Error: Invalid number selected.");
    }
    addGamePattern(randomChosenColour);
    currentLevel = level;
}

function addGamePattern(randomChosenColour) {
    gamePattern.push(randomChosenColour);
}

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    
    $(this).fadeOut(90).fadeIn(90);
    userClickedPattern.push(userChosenColour);

    switch(userChosenColour) {
        case "red":
            playSound("red");
            animatePress("red");
            break;
        case "blue":
            playSound("blue");
            animatePress("blue");
            break;
        case "green":
            playSound("green");
            animatePress("green");
            break;
        case "yellow":
            playSound("yellow");
            animatePress("yellow");
            break;
        default:
            console.log("Error: Invalid sound name.");
    }
    checkAnswer(userChosenColour);
    currentLevel--;
    if (currentLevel === 0 && level > 0) {
        setTimeout(() => {
            nextSequence();
        }, 1000);
    }
});

function playSound(name) {
    var blueSound = new Audio("./sounds/blue.mp3");
    var greenSound = new Audio("./sounds/green.mp3");
    var redSound = new Audio("./sounds/red.mp3");
    var yellowSound = new Audio("./sounds/yellow.mp3");

    switch(name) {
        case "red":
            redSound.play();
            break;
        case "blue":
            blueSound.play();
            break;
        case "green":
            greenSound.play();
            break;
        case "yellow":
            yellowSound.play();
            break;
        default:
            console.log("Error: Invalid sound name.");
    }
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

addEventListener("keydown", function(event) {
    keyPressed = event.key;

    if (keyPressed && level === 0) {
        nextSequence();
    }
});

function checkAnswer(userChosenColour) {
    var wrongSound = new Audio("./sounds/wrong.mp3");

    if (gamePattern[gamePattern.length - currentLevel] === userChosenColour) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
        wrongSound.play();
        startOver();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
    }
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    currentLevel = level;
}