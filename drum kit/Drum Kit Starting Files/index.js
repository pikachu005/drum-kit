/*document.querySelectorAll("button")[0].addEventListener("click", hello);
document.querySelectorAll("button")[1].addEventListener("click", hello);
document.querySelectorAll("button")[2].addEventListener("click", hello);
document.querySelectorAll("button")[3].addEventListener("click", hello);
document.querySelectorAll("button")[4].addEventListener("click", hello);
document.querySelectorAll("button")[5].addEventListener("click", hello);
document.querySelectorAll("button")[6].addEventListener("click", hello);*/
for (var i = 0; i < 7; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
    hello(buttoninnerhtml);
    pressedbutton(buttoninnerhtml);
  });
document.addEventListener("keydown", function (event) {
  hello(event.key);
  pressedbutton(event.key);
});
function hello(key) {
  console.log(key);
  if (key == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (key == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if (key == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if (key == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  if (key == "j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  if (key == "k") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (key == "l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}
function pressedbutton(key) {
  var t = document.querySelector("." + key);
  t.classList.add("pressed");
  setTimeout(function () {
    t.classList.remove("pressed");
  }, 100);
}
