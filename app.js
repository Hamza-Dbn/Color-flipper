//list of colors that will be displayed
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//The "Click me" button in DOM
const btn = document.getElementById("btn");
//The color name in DOM
const color = document.querySelector(".color");

//The function that will call the colors through the button "Click me"
btn.addEventListener("click", function () {
  //we get a random number between 0 - 3 refering to the index of colors
  const randomNumber = getRandomNumber();
  //we target the body with the colors
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
