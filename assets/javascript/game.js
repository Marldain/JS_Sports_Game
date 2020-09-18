let teamOneShoot = document.querySelector("#teamone-shoot-button");
let teamOneShots = document.querySelector("#teamone-numshots");
let teamOneGoals = document.querySelector("#teamone-numgoals");

let teamTwoShoot = document.querySelector("#teamtwo-shoot-button");
let teamTwoShots = document.querySelector("#teamtwo-numshots");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");

teamOneShoot.addEventListener("click", function () {
  let newCount = Number(teamOneShots.innerHTML) + 1;
  teamOneShots.innerHTML = newCount;
  let basket = Math.random();
  if (basket < 0.5) {
    let newShots = Number(teamOneGoals.innerHTML) + 1;
    teamOneGoals.innerHTML = newShots;
  }
});

teamTwoShoot.addEventListener("click", function () {
  let newCount = Number(teamTwoShots.innerHTML) + 1;
  teamTwoShots.innerHTML = newCount;
  let basket2 = Math.random();
  if (basket2 < 0.2) {
    let newCount2 = Number(teamTwoGoals.innerHTML) + 1;
    teamTwoGoals.innerHTML = newCount2;
  }
});

let resets = document.querySelector("#num-resets");
let resetCount = document.querySelector("#reset-button");

resetCount.addEventListener("click", function () {
  let newCount = Number(resets.innerHTML) + 1;
  resets.innerHTML = newCount;
  teamOneShots.innerHTML = 0;
  teamOneGoals.innerHTML = 0;
  teamTwoShots.innerHTML = 0;
  teamTwoGoals.innerHTML = 0;
});
