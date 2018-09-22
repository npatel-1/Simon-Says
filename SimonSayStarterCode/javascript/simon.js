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

  // ---------SELECT RANDOM COLOURS---------
  document.getElementById("red").onmousedown = function() {mouseDown()};
  document.getElementById("red").onmouseup = function() {mouseUp()};

  function mouseDown(){
    document.getElementById("red").style.backgroundColor = ("red");
    // console.log("red");
  // ---------PUSHING TO ARRAY---------
    if ("true") {
      guessSequence.push("red");
      console.log(guessSequence);
    }
  }
  function mouseUp(){
    document.getElementById("red").style.backgroundColor = ("white");
    console.log("white");
  }

  document.getElementById("blue").onmousedown = function() {mouseDown1()};
  document.getElementById("blue").onmouseup = function() {mouseUp1()};

  function mouseDown1(){
    document.getElementById("blue").style.backgroundColor = ("blue");
    // console.log("blue");
    if ("true") {
      guessSequence.push("blue");
      console.log(guessSequence);
    }
  }
  function mouseUp1(){
    document.getElementById("blue").style.backgroundColor = ("white");
    console.log("white");
  }

  document.getElementById("green").onmousedown = function() {mouseDown2()};
  document.getElementById("green").onmouseup = function() {mouseUp2()};

  function mouseDown2(){
    document.getElementById("green").style.backgroundColor = ("green");
    // console.log("green");
    if ("true") {
      guessSequence.push("green");
      console.log(guessSequence);
    }
  }
  function mouseUp2(){
    document.getElementById("green").style.backgroundColor = ("white");
    console.log("white");
  }

  document.getElementById("yellow").onmousedown = function() {mouseDown3()};
  document.getElementById("yellow").onmouseup = function() {mouseUp3()};

  function mouseDown3(){
    document.getElementById("yellow").style.backgroundColor = ("yellow");
    // console.log("yellow");
    if ("true") {
      guessSequence.push("yellow");
      console.log(guessSequence);
    }
  }
  function mouseUp3(){
    document.getElementById("yellow").style.backgroundColor = ("white");
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
