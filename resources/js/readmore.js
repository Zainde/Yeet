
// Læs mere function
window.onload=addfold

// variable for filter buttons
var readmore=Array.from(document.getElementsByClassName('foldout'));
function addfold(){
  for (var i = 0; i < readmore.length; i++) {
    readmore[i].addEventListener('click', function(){
      console.log(this);
      for (var j = 0; j <  Array.from(document.getElementsByClassName("middle")).length; j++) {
        if (  Array.from(document.getElementsByClassName("middle"))[j].classList.contains("animatefold")) {
          Array.from(document.getElementsByClassName("middle"))[j].classList.remove("animatefold")
        }      }
        this.parentElement.classList.add("animatefold");
    });
  }
}
