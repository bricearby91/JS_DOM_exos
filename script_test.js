


var Footer = document.getElementsByTagName("footer")[0];
var x=0

var onFooterClick = function() {
	x+=1;
	console.log("clic n° " + x);
};

Footer.addEventListener("click", onFooterClick);

var Burger = document.getElementsByTagName("span")[0];
Burger.onclick=onHeaderClick;

var nav = document.getElementById("navbarHeader");

var head = document.getElementsByTagName("header")[0];



head.onclick=onHeaderClick();



var onHeaderClick = function() {
	console.log("c'est bon");

}



Burger.addEventListener("click", onBurgerClick);


var Burger = document.getElementsByTagName("span")[0];
var onHeaderClick = function() {
	console.log("c'est bon");

}
Burger.onclick=onHeaderClick;