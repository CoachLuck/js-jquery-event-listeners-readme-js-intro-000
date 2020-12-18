//define functions here
function getIt() {
  $('p').on("click", alert("Hey!"))
}
 
function frameIt() {
  $('img').on("load", function {
    $('img').addClass('tasty')
  })
}


$(document).ready(function(){

  getIt
  

});
