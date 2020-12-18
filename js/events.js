//define functions here
function getIt() {
  $('p').on('click', alert("Hey!"));
}

function frameIt() {
  $('img').on("load", $('img').addClass('tasty'));
}

function pressIt() {
  $('#typing').on("keydown", getKey())
}

function getKey(key) {
  if (key.which === 71) {
    alert('G was pressed')
  }
}

$(document).ready(function() {
  getIt(),
  frameIt(),
  pressIt()
});
