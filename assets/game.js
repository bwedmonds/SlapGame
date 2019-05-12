let name = "Zach"
let health = 0;
let hits = 0;

let player = {
  name: Zach,
  smileyness: 0,
  smileyIndex: 0,
  frownPower: 50,
  moods: ["specialfrown", "regularRBF", "pseudosmiley"]
  hits: 0,
  images: ['/assets/images/zach_frown.png', '/assets/images/zach_rbf.png', '/assets/images/zach_selfie.png']
  items: []
}

function highFive() {
  player.smileyness++;
  player.hits++;
  update()
}

function rumPunch() {
  player.smileyness += 2;
  player.hits += 1;
  update()
}

function cake() {
  player.smileyness += 2;
  player.hits += 1;
  update();
}

function tickle() {
  player.smileyness += 3;
  player.hits += 1;
  update();
}

function cuddle() {
  player.smileyness += 3;
  player.hits += 1;
  update();
}

function hug() {
  player.smileyness += 3;
  player.hits += 1;
  update();
}

function update() {
  // document.getElementById("smileyness").innerText = player.smileyness;
  document.getElementById('hits').innerText = player.hits.toString();
  document.getElementById('name').innerText = player.name;
  document.getElementById('smileyness').innerText = player.smileyness.toString();
  document.getElementById('smileyness').setAttribute('style', `width: ${player.smileyness.toString()}%`)
}

update()
highFive()
rumPunch()
cake()
