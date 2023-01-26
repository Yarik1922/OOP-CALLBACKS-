//first
import Form from "./form.js";
let counter = 10;
const box = document.querySelector(".box");
const start = document.querySelector(".start");
box.innerHTML = counter;
start.addEventListener("click", () => {
  time();
});

function time() {
  box.innerHTML = counter;
  countDown();
}
function countDown() {
  counter--;
  if (counter != 0) {
    setTimeout(time, 1000);
  }
}
//second
async function callGoogleUser(id) {
  try {
    await fetch();
    onSuccess(id);
  } catch (error) {
    onFailed();
  }
}
function onSuccess(user) {
  return `the use in formation for user ${user} has been retrieved`;
}
function onFailed() {
  return "user with this id not fund";
}
//third
const form = new Form();
form.readForm();
