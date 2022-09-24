var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];


var started = false;

var level = 0;

$(document).keypress(function(event){

  if(!started){

    $("#level-title").text("Level "+level);
    started = true;
    nextSequence()

  }
});

 $( ".btn" ).click(function() {
    var userChosenColour =  $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(((userClickedPattern.length)-1));


   });


function nextSequence(){
userClickedPattern = [];
level++;

  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
  var  selectedButton =  $("#"+ randomChosenColor);
      selectedButton.fadeIn(100).fadeOut(100).fadeIn(100);

  }

function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColour){

$("#" + currentColour).addClass("pressed");
$("#" + currentColour).delay(50).fadeIn(100).fadeOut(100).fadeIn(50);
$("#" + currentColour).removeClass("pressed");

}

function checkAnswer(currentLevel){

if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

  console.log("success");

}
if (gamePattern.length === userClickedPattern.length){

  setTimeout(function () {
    nextSequence();
  }, 1000);

}

else {
playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
    }, 200);
  $("#level-title").text("Game Over, Press Any Key to Restart")
  startOver();
}

}

function startOver(){

  var level = 0;
  gamePattern = [];
  var started = false;

}
