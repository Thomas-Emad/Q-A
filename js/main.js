num = 0;
let result = 0;
document.getElementsByClassName("container")[0].innerHTML = "";
let scour = document.write(`<h3 id="scour">${num}</h3>`);

const numberQ = 10;

// My Data Question
let arrey = [
  "",
  qOne,
  qTwo,
  qThree,
  q4,
  q5,
  q6,
  qOne,
  qTwo,
  qThree,
  q4,
  q5,
  q6,
];
// let arrey = ["", qOne, q5, q6];
// Make Random Number And Put The Question For Random
let lengthArrey = arrey.length - 1;
for (let i = 0; i < numberQ; i++) {
  random = Math.ceil(Math.random() * lengthArrey);
  document.getElementsByClassName(
    "container"
  )[0].innerHTML += `${arrey[random]}`;
  console.log(random);
}

// Put all question in Left
for (i = 0; i < numberQ; i++) {
  document.getElementsByClassName("question")[`${i}`].style.left = "150%";
}
// First question You can show first numberShowQ
document.getElementsByClassName("question")[0].style.left = "50%";

// This be Transform The numberShowQ
let numberShowQ = 0;
let left = () => {
  document.getElementsByClassName("question")[
    numberShowQ
  ].style.cssText = `left:-50%;visibility:hidden;`;
  numberShowQ++;
  for (i = 2; i < numberQ; i++) {
    if (numberShowQ <= i) {
      document.getElementsByClassName("question")[`${numberShowQ}`].style.left =
        "50%";
    }
  }
  if (numberShowQ === 10 && num < 10) {
    console.log(`Bad Work Your Scour is ${num}`);
    let classEndGame = document.getElementsByClassName("endGame")[0];
    classEndGame.style.display = "block";
    classEndGame.innerHTML = `
    <div class="box bot">
    <p class="icon">&#128531;</p>
    <p>!I'm sorry, but your score is not enough<br />Your score is ${num}<sub>/10</sub></p>
      <button id="reGame" onclick="reGame()">Re Game</button>
      </div>
      `;
  } else if (numberShowQ === 10 && num === 10) {
    result = 1;
    let classEndGame = document.getElementsByClassName("endGame")[0];
    classEndGame.style.display = "block";
    classEndGame.innerHTML = `
    <div class="win">
    <p class="icon">&#128515;</p>
    <p>Your score is ${num}<sub>/10</sub></p>
    <div class="winGame">
      <div class="box">
        <div class="image"></div>
        <button id="showThis" onclick="showThisOne()">Get This</button>
        <div class="sendWall" id="sendWall">
          <input type="text" value="15" hidden name="id" />
          <input
            type="text"
            name="Wallet"
            placeholder="write your Wallet."
            id="valueWallet"
          />
          <button id="getThis" onclick="getThis()">Get</button>
        </div>
      </div>
      <div class="box">
        <div class="image"></div>
        <button id="showThis" onclick="showThisTwo()">Get This</button>
        <div class="sendWall" id="sendWall">
          <input type="text" value="15" hidden name="id" />
          <input
            type="text"
            name="Wallet"
            placeholder="write your Wallet."
            id="valueWallet"
          />
          <button id="getThis" onclick="getThis()">Get</button>
        </div>
      </div>
    </div>
    <button id="reGame" onclick="reGame()">Re Game</button>
  </div>
  <div id="ok">
    <p class="icon">&#9989;</p>
    <p>Wait for Steam to send it within 24 hours.</p>
  </div>

      `;
    let checkLengthWallet = () => {
      check.style.cssText = `
    width: 100%;
    height: 100vh;
    z-index: 2147483647;
    background-color: rgb(57, 50, 50);
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    `;
    };
  }
};
function showThisOne() {
  document.getElementsByClassName("sendWall")[0].style.display = "block";
}
function showThisTwo() {
  document.getElementsByClassName("sendWall")[1].style.display = "block";
}

let check = document.getElementById("ok");

function getThis() {
  let valueWallet = document.getElementById("valueWallet").value;
  if (valueWallet.length >= 2) {
    checkLengthWallet();
  }
}
// Re Game
function reGame() {
  window.location.reload();
}

// Get The id for Scour then after time show this answer
const printScour = document.getElementById("scour");

/* Question 1 */
if (document.getElementById("oneO") !== null) {
  // if Any SomeOne Try  Click in here => Do this.
  document.getElementById("oneO").onclick = left;
  function qOAnsTwo() {
    num++;
    printScour.innerHTML = num;
    left();
  }
  document.getElementById("threeO").onclick = left;
  document.getElementById("fourO").onclick = left;
}
/* Question 2 */
if (document.getElementById("oneT") !== null) {
  // if Any SomeOne Try  Click in here => Do this.
  document.getElementById("oneT").onclick = left;
  function qTAnsTwo() {
    num++;
    printScour.innerHTML = num;
    left();
  }
  document.getElementById("threeT").onclick = left;
  document.getElementById("fourT").onclick = left;
}
/* Question 3 */
if (document.getElementById("oneTh") !== null) {
  // if Any SomeOne Try  Click in here => Do this.
  document.getElementById("oneTh").onclick = left;
  function qThAnsTwo() {
    num++;
    printScour.innerHTML = num;
    left();
  }
  document.getElementById("threeTh").onclick = left;
  document.getElementById("fourTh").onclick = left;
}
/* Question 4 */
if (document.getElementById("oneFo") !== null) {
  // if Any SomeOne Try  Click in here => Do this.
  document.getElementById("oneFo").onclick = left;
  function q4AnsTwo() {
    num++;
    printScour.innerHTML = num;
    left();
  }
  document.getElementById("threeFo").onclick = left;
  document.getElementById("fourFo").onclick = left;
}
/* Question 5 */
if (document.getElementById("oneAn5") !== null) {
  document.getElementById("oneAn5").onclick = left;
  document.getElementById("twoAn5").onclick = left;
  function q5AnsThree() {
    num++;
    printScour.innerHTML = num;
    left();
  }
  document.getElementById("fourAn5").onclick = left;
}
/* Question 6 */
if (document.getElementById("oneAn6") !== null) {
  // if this empty (NoThing).
  document.getElementById("oneAn6").onclick = left;
  // if this Good Answer => Do this.
  function q6AnsTwo() {
    num++;
    printScour.innerHTML = num;
    left();
  }
  document.getElementById("threeAn6").onclick = left;
  document.getElementById("fourAn6").onclick = left;
}

// ############################################################
// I Wnat You Don't Open The DevTools In The Site, How I Can Do This ? That's Answer:-
document.addEventListener("contextmenu", (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};
console.log("I Want Know Why You Want Open DevTools?");
// ############################################################
