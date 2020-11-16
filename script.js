
//Exo 1

var Footer = document.getElementsByTagName("footer")[0];
var x=0

var onFooterClick = function() {
	x+=1;
	console.log("clic n° " + x);
};

Footer.addEventListener("click", onFooterClick);

//Exo 2

var Burger = document.getElementsByTagName("span")[0];
var nav = document.getElementById("navbarHeader");


function onBurgerClick() {
	if (nav.classList.contains("collapse") == false) {
		nav.classList.add("collapse");
	}
	else {
		nav.classList.remove("collapse");
	}
}

Burger.addEventListener("click", onBurgerClick);

//Exo 3

var cardText1 = document.querySelector("p.card-text");
var editButton = document.querySelector("button.btn-outline-secondary");

function onButtonClick () {
	cardText1.style.color = "red";
}

editButton.addEventListener("click", onButtonClick);

//Exo 4

var cardText2 = document.querySelectorAll("p.card-text")[1];
var editButton2 = document.querySelectorAll("button.btn-outline-secondary")[1];
var originalColor = getComputedStyle(cardText2).color;

function onButtonClick2 () {


 if (cardText2.style.color != "green" ) {
cardText2.style.color = "green";
						}
	else {
	cardText2.style.color = originalColor;
		}
}

editButton2.addEventListener("click", onButtonClick2);

//Exo 5

var nav1 = document.getElementsByClassName("navbar")[0];
var cssLink = document.getElementsByTagName("link")[0];

onNavbarClick = function() {

if (cssLink.disabled == false) {
	cssLink.disabled = true;
				}
else {
	cssLink.disabled = false;
	}
}

nav1.addEventListener("dblclick", onNavbarClick);

//Exo 6


var viewButton = [];
var cardImage = [];
var cardText = [];
var initialText = [];

for (let i=0; i<6; i++) {

viewButton.push(document.getElementsByClassName("btn-success")[i]);
cardImage.push(document.getElementsByClassName("card-img-top")[i]);
cardText.push(document.getElementsByClassName("card-text")[i]);
initialText.push(cardText[i].innerHTML);

var initialImgWidth = getComputedStyle(cardImage[0]).width


viewButton[i].addEventListener("mouseenter", function(){
if (cardText[i].innerHTML != "") {
	cardImage[i].style.width = "68px";
	cardText[i].innerHTML = "";
							}
else {
	cardText[i].innerHTML = initialText[i];
	cardImage[i].style.width = initialImgWidth;

	}
})
}

//Exo 7

function orderShift () {

var container = document.getElementsByClassName("row")[1];
var card6 = container.children[5];
container.insertBefore(card6, container.children[0]);

}

var greyButton = document.querySelectorAll("a.my-2")[1];

greyButton.addEventListener("click",function(event) {
	event.preventDefault();
	var container = document.getElementsByClassName("row")[1];
	var card6 = container.children[5];
	container.insertBefore(card6, container.children[0]);
});

//Exo 8

var blueButton = document.querySelectorAll("a.my-2")[0];

blueButton.addEventListener("click",function(event) {
	event.preventDefault();
	var container = document.getElementsByClassName("row")[1];
    var card1 = container.removeChild(container.children[0]);
	container.appendChild(card1);
});

//Exo 9

