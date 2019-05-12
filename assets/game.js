let name = "Zach"
let health = 0;
let hits = 0;

function highFive() {
  health++;
  hits++;
  // alert(health);
  update()
}

function rumPunch() {
  health += 2;
  hits += 1;
  // alert(health);
  update()
}

function cake() {
  health += 2;
  hits += 1;
  update();
}

function tickle() {
  health += 3;
  hits += 1;
  update();
}

function cuddle() {
  health += 3;
  hits += 1;
  update();
}

function hug() {
  health += 3;
  hits += 1;
  update();
}

function update() {
  // document.getElementById("health").innerText = health;
  document.getElementById('hits').innerText = hits.toString();
  document.getElementById('name').innerText = name;
  document.getElementById('health').innerText = health.toString();
  document.getElementById('health').setAttribute('style', `width: ${health.toString()}%`)
}

update()
// highFive()
// rumPunch()
// cake()
