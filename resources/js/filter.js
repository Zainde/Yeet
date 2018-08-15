// variable for filter buttons
var filterButton=Array.from(document.getElementsByClassName('filter'));
// variable for sales article buttons
var categorybutton=Array.from(document.getElementsByClassName('catbut'));
// variable for salesarticles
var SalesArt=Array.from(document.getElementsByClassName('category'));

window.onload=addclick
// adds onclick function for all buttons
function addclick(){

for (var i = 0; i < filterButton.length; i++) {
  filterButton[i].addEventListener('click',function () {
    // variable for filter category
  var filterCat=this.classList[1];
  // loop going through all sales articles
  for (var i = 0; i < SalesArt.length; i++) {
    // shows/hides so only the sales articles with the same class as the button pressed
  if (SalesArt[i].classList.contains(filterCat)) {
    categorybutton[i].classList.remove("hide");
    categorybutton[i].classList.add("show");

  }
  else{
  categorybutton[i].classList.remove("show");
    categorybutton[i].classList.add("hide");
  }
}
});

}}



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
