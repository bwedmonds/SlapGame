// let name = "Zach"
// let health = 0;
// let hits = 0;

var player = {
  name: 'Zach',
  smileyness: 0,
  smileyIndex: 0,
  frownPower: 50,
  hits: 0,
  images: ['/assets/images/zach_frown.png', '/assets/images/zach_rbf.png', '/assets/images/zach_selfie.png'],
  items: [],
}

var items = {
  bear: {
    name: 'Bear',
    modifier: 5,
    description: 'So huggy!'
  },
  feather: {
    name: 'Feather',
    modifier: 5,
    description: 'Not the feather!'
  },
  puppies: {
    name: 'Puppies',
    modifier: 10,
    description: 'I. Can\'t. Resist!'
  }
}

// function highFive() {
//   player.smileyness++;
//   player.hits++;
//   update()
// }

// function rumPunch() {
//   player.smileyness += 2;
//   player.hits += 1;
//   update()
// }

// function cake() {
//   player.smileyness += 2;
//   player.hits += 1;
//   update();
// }

// function tickle() {
//   player.smileyness += 3;
//   player.hits += 1;
//   update();
// }

// function cuddle() {
//   player.smileyness += 3;
//   player.hits += 1;
//   update();
// }

// function hug() {
//   player.smileyness += 3;
//   player.hits += 1;
//   update();
// }

function increaseSmileyIndex() {
  if (player.smileyness >= player.frownPower && player.smileyIndex == 0) {
    player.smileyIndex++;
  } else if (player.smileyness >= player.frownPower * 2 && player.smileyIndex == 1) {
    player.smileyIndex++;
  }
  drawZach()
}

function drawZach() {
  document.getElementById("zach-image").setAttribute("src", player.images[player.smileyIndex])
}

function smilies(hitNum) {
  player.smileyness += hitNum + addmods();
  player.hits += 1;
  winner();
  update();
}

function giveItem(item) {
  if (player.items.length == 0) {
    player.items.push(items[item].modifier);
  } else {
    player.items.pop();
    player.items.push(items[item].modifier);
  }
}

function addmods() {
  let currentMods = 0;
  for (let i = 0; i < player.items.length; i++) {
    currentMods += player.items[i];
  }
  return currentMods;
}

function reset() {
  player.smileyness = 0;
  player.hits = 0;
  document.getElementById("zach-image").src = "/assets/images/zach_frown.png";
  player.items.pop();
  document.getElementById('playerButton1').disabled = false;
  document.getElementById('playerButton2').disabled = false;
  document.getElementById('playerButton3').disabled = false;
  document.getElementById('playerButton4').disabled = false;
  document.getElementById('playerButton5').disabled = false;
  document.getElementById('playerButton6').disabled = false;
  document.getElementById('playerButton7').disabled = false;
  document.getElementById('playerButton8').disabled = false;
  document.getElementById('playerButton9').disabled = false;
  update();
}

function update() {
  // document.getElementById("smileyness").innerText = player.smileyness;
  document.getElementById('hits').innerText = player.hits.toString();
  document.getElementById('name').innerText = player.name;
  document.getElementById('player-smileyness').innerText = player.smileyness.toString();
  document.getElementById('player-smileyness').setAttribute('style', `width: ${player.smileyness.toString()}%`);
  increaseSmileyIndex();
}

function winner() {
  if (player.smileyness >= 100) {
    document.getElementById('playerButton1').disabled = true;
    document.getElementById('playerButton2').disabled = true;
    document.getElementById('playerButton3').disabled = true;
    document.getElementById('playerButton4').disabled = true;
    document.getElementById('playerButton5').disabled = true;
    document.getElementById('playerButton6').disabled = true;
    document.getElementById('playerButton7').disabled = true;
    document.getElementById('playerButton8').disabled = true;
    document.getElementById('playerButton9').disabled = true;
    winnerNotice()
  }
  update()
}

function winnerNotice() {
  var message = 'What? Zach smiled?! Inconceivable! Reset to defeat RBF again!';
  $('#alertModal').find('.modal-body p').text(message);
  $('#alertModal').modal('show')
}