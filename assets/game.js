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
  // alert(health);
  update();
}

function update() {
  document.getElementById("health").innerText = health
  document.getElementById("hits").innerText = hits
  document.getElementById("name").innerText = name

}

// highFive()
// rumPunch()
// cake()
