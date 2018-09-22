document.addEventListener('DOMContentLoaded',function(){

  var lives = 3;
  var score = 0;
  var randomColourSequence = [];
  var guessSequence = [];
  var gamePosition = 0;
  var guessCount = 0;

  function setUpGame(){
    document.getElementById('lives').innerHTML = lives;
    document.getElementById('score').innerHTML = score;
    document.getElementById('nextButton').display = 'none';
      setUpGameListeners();
  }

  function setUpGameListeners(){
    // console.log('Add Code Here');
    document.getElementById("startButton").addEventListener("click", function(e){
      console.log("clicked");
      createRandomColourSequence();
    })
  }

  function startGame(){

  }

  function createRandomColourSequence(){

  }

  // function pickRandomColour(){
  //
  //   })
  document.getElementById("red").onmousedown = function() {mouseDown()};
  document.getElementById("red").onmouseup = function() {mouseUp()};
  // document.getElementById("red").addEventListener("onmousedown", mouseDown)
  // document.getElementById("red").addEventListener("onmousedown", mouseUp)
  function mouseDown(){
    // let divColor = e.target.style;
    // e.target.style.backgroundColor = ("red");
    document.getElementById("red").style.backgroundColor = ("red");
    console.log("red");
  }
  function mouseUp(){
    document.getElementById("red").style.backgroundColor = ("white");
    console.log("white");
  }



  function showSequence(){

  }

  function recordMove(){

  }

  function setListenersOnBoxes(boxes) {

  }

  function removeListenersOnBoxes() {

  }

  function checkForCorrectSequence() {

  }

  function looseLife(){

  }

  function gameOver(){

  }

  setUpGame();

});
