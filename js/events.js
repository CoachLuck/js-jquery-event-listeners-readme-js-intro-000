//define functions here
function getIt() {
  $('p').on("click", alert("Hey!"))
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('$typing').on("keydown", (elem) => {
    if elem === "G" {
      alert("You pressed 'G'")
    }
  })
}


$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
});
