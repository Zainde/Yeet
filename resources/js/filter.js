// variable for salesarticles
var SalesArt=Array.from(document.getElementsByClassName('category'));
// variable for filter buttons
var filterButton=Array.from(document.getElementsByClassName('filter'));

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

  if (SalesArt[i].classList[1]==filterCat) {
    SalesArt[i].classList.remove("hide");
    SalesArt[i].classList.add("show");
  }
  else {
  SalesArt[i].classList.remove("show");
    SalesArt[i].classList.add("hide");
  }
}
});

}}
