$(function(){
  var lives = 3;
  var score = 0;
  var randomColourSequence = [];
  var guessSequence = [];
  var gamePosition = 0;
  var guessCount = 0;

  function setUpGame(){
    $('#lives').html(lives);
    $('#score').html(score);
    $('#nextButton').hide();
    setUpGameListeners();
  }

  function setUpGameListeners(){
    console.log("Add Code Here")
  }

  function startGame(){
    document.getElementById("startButton").click(function(){
      createRandomColourSequence();

    })
  }

  function createRandomColourSequence(){
    // generate 4 colours
    let randomNum = Math.floor(Math.random() * 4)
    randomColourSequence.push(random);
    for (var i = 0; i < randomColourSequence.length; i++) {
      randomColourSequence[i] === guessSequence[i];
      i++
    }
  }

  function pickRandomColour(){

  }

  function showSequence(){
    document.body.createElement("showSequence")

    randomNum()
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

})
