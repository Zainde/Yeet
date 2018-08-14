// variable for salesarticles
var SalesArt=Array.from(document.getElementsByClassName('category'));
// variable for filter buttons
var filterButton=Array.from(document.getElementsByClassName('filter'));

window.onload=addclick
// adds onclick function for all buttons
function addclick(){
  var categorybutton=Array.from(document.getElementsByClassName('catbut'));

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
