//define functions here
function getIt() {
  $('p').on('click', alert("Hey!"));
}

function frameIt() {
  $('img').on("load", $('img').addClass('tasty'));
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.which === 71) {
      alert('G was pressed')
    }
  })
}

function submitIt() {
  $('input[type="submit"]')
}


$(document).ready(function() {
  getIt(),
  frameIt(),
  pressIt()
});
