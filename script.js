// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.

// Display variables
var counter = 0;
var displayEl = document.getElementById("display");
var story = "Once upon a time, ";

// Button variables
var minus50btn = document.getElementById("minus50");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var add50btn = document.getElementById("plus50");
var add10btn = document.getElementById("plus10");
var add1btn = document.getElementById("plus1");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

var randomSizeBtn = document.getElementById("random-size");
var randomRgbBtn = document.getElementById("random-rgb");
var resetBtn = document.getElementById("reset");

// other
var initialFontSize = document.body.style.fontSize;
var initialBodyColor = document.getElementById("HTML").style.background;
var blank = "";
var dashes = "----------";

// Event listeners
minus50btn.addEventListener("click", minus50);
minus10btn.addEventListener("click", minus10);
minus1btn.addEventListener("click", minus1);
add50btn.addEventListener("click", add50);
add10btn.addEventListener("click", add10);
add1btn.addEventListener("click", add1);
stringInEl.addEventListener("change", updateStory);

randomSizeBtn.addEventListener("click", randomSize);
randomRgbBtn.addEventListener("click", randomRgb);
resetBtn.addEventListener("click", resetVars);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event function
function minus50() {
  // Update the value of the counter (JS)
  counter -= 50;
  console.log(counter);

  // Use the counter to update the website (HTML)
  displayEl.innerHTML = counter;
}
function minus10() {
  counter -= 10;
  console.log(counter);

  displayEl.innerHTML = counter;
}
function minus1() {
  counter--;
  console.log(counter);

  displayEl.innerHTML = counter;
}
function add50() {
  counter += 50;
  console.log(counter);

  displayEl.innerHTML = counter;
}
function add10() {
  counter += 10;
  console.log(counter);

  displayEl.innerHTML = counter;
}
function add1() {
  counter++;
  console.log(counter);

  displayEl.innerHTML = counter;
}

function updateStory() {
  // Save the user's word to a variable
  var word = stringInEl.value;
  console.log(word);

  // Update the story variable (JS)
  story += word + " ";

  // Update the website to show the story
  console.log(story);
  stringInEl.value = "";
  storyEl.innerHTML = story;

  // Clear the input field
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", roundOne);
roundBtn2.addEventListener("click", roundTwo);
roundBtn3.addEventListener("click", roundThree);
roundBtn4.addEventListener("click", roundFour);

function roundOne() {
  // Create random dec 0 - 1
  let rand = Math.random();

  // Round to 3 dec places
  rand = rand.toFixed(3);
  console.log(rand);

  // Update site
  document.getElementById("rand1-out").innerHTML = rand;
}

function roundTwo() {
  let rand = Math.random() * 100;

  rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand2-out").innerHTML = rand;
}

function roundThree() {
  let rand = Math.random() * (-5 - 5) + 5;

  rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function roundFour() {
  let num1 = +document.getElementById("rand-in1").value;
  let num2 = +document.getElementById("rand-in2").value;

  let rand = Math.random() * (num2 - num1) + num1;
  rand = rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand4-out").innerHTML = rand;
}

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML +=
    '<img width="160px" src="images/hichew.png" alt="Hi-Chew Pic">';
  console.log("ADDED A CANDY!");
}

function randomSize() {
  let size = Math.random() * 75;
  size = Math.round(size);
  document.body.style.fontSize = size + "px";
  console.log(size);
}

function randomRgb() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  var rgbString = "rgb(" + r + "," + g + "," + b + ")";

  document.getElementById("HTML").style.background = rgbString;
  console.log(rgbString);
}

function resetVars() {
  counter = 0;
  story = "Once upon a time, ";
  stringInEl.value = blank;

  displayEl.innerHTML = "0";
  storyEl.innerHTML = "Once upon a time, ";

  document.getElementById("rand1-out").innerHTML = dashes;
  document.getElementById("rand2-out").innerHTML = dashes;
  document.getElementById("rand3-out").innerHTML = dashes;
  document.getElementById("rand4-out").innerHTML = dashes;
  document.getElementById("rand-in1").value = blank;
  document.getElementById("rand-in2").value = blank;

  picContainer.innerHTML = blank;
  document.body.style.fontSize = initialFontSize;
  document.getElementById("HTML").style.background = initialBodyColor;
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
// 5. Create a button that when pressed, adds an image of a your favorite toy to the website
// Each click adds another toy.
